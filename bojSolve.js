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

const [N, M] = inputNewLine[0].split(' ').map(c => Number(c));
let arr = new Array(N).fill(0);
arr = arr.map((c,i) => c =( i +1));

for(let i = 1; i <= M; i++){
    let [x, y] = inputNewLine[i].split(" ").map(c => Number(c));

    let temp = arr[x-1];
    arr[x-1] = arr[y-1];
    arr[y-1] = temp;
}

console.log(arr.join(" "));





// const arr = new Array(N).fill(0);

// for(let i =1; i <= M; i++){
//     let [start, end, k] = input[i].split(" ").map(el => Number(el));
//     for(start; start <= end; start++){
//         arr[start -1] = k;
//     }
// }

// console.log(arr);