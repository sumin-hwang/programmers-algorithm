// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

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

const [N, M] = input.shift().split(" ").map(Number);
const map = new Array(N);
const visited = Array.from(Array(N), () => Array(M).fill(false));
let count = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for(let i =0; i < input.length; i++){
  map[i] = input[i].split("").map(Number);
}

const bfs = (x, y) => {
  const q = [];
  q.push([x, y]);
  visited[x][y] = true;

  while(q.length){
    const [x1, y1] = q.shift();

    for(let i=0; i < 4; i++){
      const [nx, ny] = [x1 + dx[i], y1 + dy[i]];

      if(nx >= 0 && nx < N && ny >= 0 && ny < M){
        if(map[nx][ny]=== 1 && !visited[nx][ny]){
          visited[nx][ny] = true;
          map[nx][ny] = map[x1][y1] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }

}

bfs(0,0);
console.log(map[N-1][M -1]);