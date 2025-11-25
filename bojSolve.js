// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

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

let str = input.shift();
const order = Number(input[0]);

let rightStack = [];
let leftStack = [];

for(let ch of str){
  leftStack.push(ch);
}

for(let i =1; i <= order; i++){
  const [x, y] = input[i].split(" ");

  if(x === "P"){
    leftStack.push(y); //abcdx
  }else if(x === "L"){
    if(leftStack.length > 0){
      let temp = leftStack.pop();
      rightStack.push(temp);
    }
  }else if (x === "D"){
    if(rightStack.length > 0){
      leftStack.push(rightStack.pop());
    }
  }else if (x === "B"){
    if(leftStack.length > 0 ){
      leftStack.pop();
    }
  }
}

console.log(leftStack.join("") + rightStack.reverse().join(""));