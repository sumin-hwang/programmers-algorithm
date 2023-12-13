// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let input = require('fs').readFileSync('/dev/stdin').toString().trim()

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const a = require("fs").readFileSync("/dev/stdin")

let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');

const num = input[0];
const arr = input[1].split(" ");
const v = input[2];

console.log(arr.filter(c => c ===v).length);