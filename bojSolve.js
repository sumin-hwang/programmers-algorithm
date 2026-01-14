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

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for(let i =0; i < input.length; i++){
    map[i] = input[i].split("");
}

function dfs (x, y, map, visited){
    const letter = map[x][y];
    const stack = [[x, y]];
    visited[x][y] = true;

    while(stack.length){
        const [x1, y1] = stack.pop();

        for(let i =0; i <4; i++){
            const [nx, ny] = [x1 + dx[i], y1 + dy[i]];

            if(nx >= 0 && nx < N && ny >=0 && ny < N && !visited[nx][ny]){
                if(map[nx][ny] === letter){
                    stack.push([nx, ny]);
                    visited[nx][ny] = true;
                }
            }
        }
    }
}


function run (map){
    const visited = Array.from({length : N}, () => Array(N).fill(false));
    let count = 0
    for(let i =0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(!visited[i][j]){
                dfs(i, j, map, visited);
                count++;
            }
        }
    }
    return count;
}

console.log(run(map));
const RGmap = map.map(c => c.map(j => j === 'R' ? j = 'G' : j));
console.log(run(RGmap));