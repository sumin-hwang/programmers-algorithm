// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');


// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");



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

let stk = [];

for(let i = 0 ; i < N; i++){
    let [a, b] = input[i].split(" ").map(c=> Number(c));
    if(a === 1){
        stk.push(b);
    }else if (a === 2){
        if(stk.length > 0 ){
            let temp = stk.pop();
            console.log(temp);
        }else{
            console.log(-1);
        }
    }else if (a === 3){
        console.log(stk.length);
    }else if (a === 4){
        stk.length === 0 ? console.log(1) : console.log(0);
    }else if (a === 5){
        if(stk.length > 0){
            console.log(stk[stk.length -1]);
        }else{
            console.log(-1);
        }
    }
}