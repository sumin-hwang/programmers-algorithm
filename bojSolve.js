// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let input = require('fs').readFileSync('/dev/stdin').toString().trim()

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const a = require("fs").readFileSync("/dev/stdin")

//배열을 받아서 숫자로 저장하기
let inputNumberNL =require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => Number(c));
let inputStringNL = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let inputSpaceNumber = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split(' ').map(c => Number(c));
let inputNewLine = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n');

const max = Math.max(...inputNumberNL);
const index = inputNumberNL.findIndex(c => c=== max);

console.log(max);
console.log(index + 1);