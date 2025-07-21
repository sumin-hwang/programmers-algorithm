// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const Module = require('module');

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

const [N, M, V] = input.shift().split(" ").map(Number);
const graph = Array.from({length : N + 1}, () => []);
let visitedDFS= new Array(N +1).fill(0);
let visitedBFS= new Array(N +1).fill(0);
const answerDFS = [];
const answerBFS = [];

for(let str of input){
    const [x, y] = str.split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}
graph.forEach((e) => e.sort((a,b) => a - b ));

const dfs = (graph, start, visitedDFS) => {
    const stack = [start];

    while(stack.length){
        const v = stack.pop();

        if(!visitedDFS[v]){
            visitedDFS[v] = true;
            answerDFS.push(v);
            for(let i = graph[v].length -1; i >= 0; i--){
                const next = graph[v][i];
                if(!visitedDFS[next]){
                    stack.push(next);

                }
            }
        }
    }
}


const bfs = (graph, start, visitedBFS) => {
    const q = [start];
    visitedBFS[start] = true;

    while(q.length){
        const v = q.shift();
        answerBFS.push(v);
        for(const next of graph[v]){
            if(!visitedBFS[next]){
                visitedBFS[next] = true;
                q.push(next);
            }
        }
    }
}

dfs(graph, V, visitedDFS);
bfs(graph, V, visitedBFS);

console.log(answerDFS.join(" "));
console.log(answerBFS.join(" "));