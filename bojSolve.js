// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const { NOMEM } = require('dns');

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");


//let input = require('fs').readFileSync('/dev/stdin').toString().trim()

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const a = require("fs").readFileSync("/dev/stdin")

//배열을 받아서 숫자로 저장하기
let inputNumberNL =require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => Number(c));
let inputStringNL = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let inputSpaceNumber = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split(' ').map(c => Number(c));
let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let input1 = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => c.split(" ").map(c => Number(c)));


const T = Number(input.shift());
let count = 0;
let answer = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];


for(let i =0; i < T; i++){
    const [M, N, K] = input.shift().split(" ").map(Number);
    const graph = Array.from(Array(N), () => Array(M).fill(0));
    const visited = Array.from(Array(N), () => Array(M).fill(false));

    for(let j =0; j < K; j++){
        const [x, y] = input.shift().split(" ").map(Number);
        graph[y][x] = 1;
    }

    let count = 0;
    for(let y = 0; y < N; y++){
        for(let x = 0; x< M; x++){
            if(graph[y][x] === 1 && !visited[y][x]){
                dfs(x, y, graph, visited, N, M);
                count++;
            }
        }
    }

    answer.push(count);

}


function dfs(x, y, graph, visited, N, M) {
    if(graph[y][x] === 1 && visited[y][x] === false){
        visited[y][x] = true;

        for(let i =0; i <4; i++){
            const [newY, newX] = [y + dy[i], x + dx[i]];
            if(newY >= 0 && newY < N && newX >= 0 && newX < M ){
                dfs(newX, newY, graph, visited, N, M);
            }
        }
    }
}

answer.map(c => console.log(c));
