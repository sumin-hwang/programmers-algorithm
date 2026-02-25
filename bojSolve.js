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

const N = Number(input.shift());
const dp = Array.from({length : N + 1}, () => Array(10).fill(0));

//dp[i][j] 길이가 i 마지막 자리가 j인 계단수의 갯수
const MOD = 1000000000;

for(let i = 1; i <= 9; i++){
    dp[1][i] = 1;
}

for(let i = 2; i <= N; i++){
    for(let j =0; j <= 9; j++){
        if(j === 0){
            dp[i][j] = dp[i-1][1] %MOD;
        }else if (j === 9){
            dp[i][j] = dp[i-1][8] %MOD;
        }else{
            dp[i][j] = (dp[i-1][j+1] + dp[i-1][j-1]) %MOD;
        }
    }
}

let result = dp[N].reduce((sum, cur) => (sum + cur)%MOD, 0);
console.log(result);