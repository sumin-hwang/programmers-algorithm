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

const N = input[0];
let answer = 0;

const isPrime = (n) => {
    let temp = 0;
    if(n < 2){
        temp++;
    }

    for(let i =0; i <= Math.sqrt(n); i++){
        if(n%i=== 0){
            temp++;
        }
    }

    return temp;
}

for(let i = 4; i <= N; i++){
    if(isPrime(i) === 3){
        answer++;
    }
}

if(N <4){
    console.log(1);
}else{
    console.log(answer);
}