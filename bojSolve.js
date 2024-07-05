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
let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n');

const word = input[0].toUpperCase();
let obj = {};

for(let i =0; i < word.length; i++){
    if(Object.keys(obj).includes(word[i])){
        obj[word[i]]++;
    }else{
        obj[word[i]] = 1;
    }
}

let objValue = Object.values(obj);
let max = Math.max(...objValue);
let cnt = objValue.filter(c => c === max);
let idx = objValue.findIndex(c => c === max);

if(cnt.length > 1){
    console.log('?')
}else{
    let keyValue = Object.keys(obj);
    console.log(keyValue[idx]);
}
