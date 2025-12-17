// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const { c } = require('tar');
const { fileURLToPath } = require('url');

// const input = require("fs")
//  .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

//let input =require('fs').readFileSync('/dev/stdin').toString().trim()

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');


// const fs = require("fs");
// const input = fs.readFleSync("/dev/stdin").toString().trim().split("\n");
// const a = require("fs").readFileSync("/dev/stdin")

//배열을 받아서 숫자로 저장하기
let inputNumberNL =require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => Number(c));
let inputStringNL = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let inputSpaceNumber = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split(' ').map(c => Number(c));
let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let input1 = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => c.split(" ").map(c => Number(c)));

const N = Number(input.shift());
const map = new Array(N);
const list = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for(let i =0; i < input.length; i++){
  map[i] = input[i].split(" ").map(Number);
}

const min = Math.min(...map.flat());
const max = Math.max(...map.flat());

const dfs = (x, y, rain, visited) => {
  const stack = [];
  stack.push([x, y]);

  while(stack.length){
    const [x1, y1] = stack.pop();

    if(!visited[x1][y1]) {
      visited[x1][y1] = true;
    }

    for(let i = 0; i < 4; i++){
      const [nx, ny] = [x1 + dx[i], y1 + dy[i]];

      if(nx >= 0 && nx < N && ny>= 0 && ny < N
        && !visited[nx][ny] && map[nx][ny] > rain){
          stack.push([nx, ny]);
      }
    }
  }
}

let temp = min;
let answer = 0;
while(max > temp){
  
let safeArea = 0;
  
  const visited = Array.from(Array(N), () => Array(N).fill(false));
  for(let i =0; i < N; i++){
    for(let j =0; j < N; j++){
      if(map[i][j] > temp && !visited[i][j]){
        dfs(i, j, temp, visited);
        safeArea++;
      }
    }
  }
  answer = Math.max(answer, safeArea);
  temp++;
}

console.log(answer);