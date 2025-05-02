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

const [N, M] = input[0].split(" ").map(c => Number(c));
let visited = new Array(N + 1).fill(false);
let result = '';
let output = [];


function backtracking(num, start){
  if(num === M){
    result+= `${output.join(" ")}\n`;
    return;
  }

  for(let i = start; i <= N; i++){
    if(visited[i] === true){
      continue;
    }

    visited[i] = true;
    output.push(i);
    backtracking(num + 1, i);
    output.pop();
    visited[i] = false;
  }
}

backtracking(0, 1);
console.log(result);