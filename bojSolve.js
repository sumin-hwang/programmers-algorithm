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

const N = input.shift();
const arr = input.map(c => c.split(" ").map(Number));

let dp = arr;

for(let i =0; i < N; i++){
    if(i === 0){
        dp[i][0] = dp[i][0];
        continue;
    }

    for(let j = 0; j < dp[i].length; j++){
        if(i === 1){
            dp[i][j] = dp[i][j] + dp[i-1][0];
            continue;
        }
        if(j === 0){
            dp[i][j] = dp[i][j] + dp[i-1][j];
        }else if(j === dp[i].length - 1){
            dp[i][j] = dp[i][j] + dp[i-1][j-1];
        }else{
            dp[i][j] = dp[i][j] + Math.max(dp[i-1][j], dp[i-1][j-1]);
        }
    }
}

console.log(Math.max(...dp[dp.length-1]));

