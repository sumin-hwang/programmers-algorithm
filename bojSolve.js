// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

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

const N = Number(input.shift());
let graph = Array.from(Array(N + 1), () => []);
let visited = Array.from(N + 1).fill(false);
let arr = [];

for(let str of input){
    const [x, y] = str.split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

const dfs = (graph, start, visited) => {
    let stack = [start];
    
    while(stack.length){
        const v = stack.pop();

        if(!visited[v]){
            visited[v] = true;
        }

        for(let i = graph[v].length - 1; i >= 0; i--){
            const next = graph[v][i];

            if(!visited[next]){
                stack.push(next);
                arr[next] = v;
            }
        }
    }
}

dfs(graph,1, visited);

console.log(arr.slice(2).join("\n"));
