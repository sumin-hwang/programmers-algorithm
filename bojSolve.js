// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

// const input = require("fs")
//  .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

//let input = require('fs').readFileSync('/dev/stdin').toString().trim()

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');


// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const a = require("fs").readFileSync("/dev/stdin")

//배열을 받아서 숫자로 저장하기
let inputNumberNL =require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => Number(c));
let inputStringNL = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let inputSpaceNumber = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split(' ').map(c => Number(c));
let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let input1 = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => c.split(" ").map(c => Number(c)));

const [total, current, startlink, up, down] = input.shift().split(" ").map(Number);
const dx = [up, down*(-1)];
const visited = new Array(total + 1).fill(false);
const dist = new Array(total + 1).fill(-1); // dist도 필요하다.

const bfs = (start) => {
    const q = [start];
    dist[start] = 0;
    visited[start] = true;

    while(q.length){
        const v = q.shift();

        if(v === startlink){
            return dist[v];
        }

        for(let i = 0; i < dx.length; i++){
            const nx = dx[i] + v;

            if(nx > 0 && nx <= total && !visited[nx]){
                visited[nx] = true;
                dist[nx] = dist[v] + 1;
                q.push(nx);

            }
        }
    }

    return "use the stairs";
}

console.log(bfs(current));