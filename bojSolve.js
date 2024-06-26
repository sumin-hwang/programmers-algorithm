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

let [line1, line2] = inputStringNL;

line1 = line1.split(' ').map(c => Number(c));
line2 = line2.split(' ').map(c => Number(c));

const [N, X] = line1;

console.log(line2.filter(c => c < X).join(' '));