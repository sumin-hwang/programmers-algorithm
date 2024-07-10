// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const { c } = require('tar');

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

const cnt = input1[0];

let arr = new Array(100).fill().map(()=> Array(100).fill(0));

for(let i = 0; i < cnt; i++){
    const [x, y] = input1[i+1];
    for(let j = y; j < y + 10; j++){
        for(let k = x; k < x + 10; k++){
            arr[k][j] = 1;
        }
    }
}

// let answer = arr[3].filter(c => c === 1).length;
let answer = 0;
for(let i =0 ; i < 100; i++){
    answer += arr[i].filter(c => c ===1).length;
}

console.log(answer);