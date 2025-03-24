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

const [N, M] = input[0].split(" ").map(c => Number(c));

const isPrime = (n) => {
    if(n < 2){
        return false;
    }

    for(let i =2; i <= Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        }
    }

    return true;
}

let arr = [];

for(let i = N; i <= M; i++){
    if(isPrime(i)){
        arr.push(i);
    }
}

arr.map(c => console.log(c));