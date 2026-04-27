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
let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
const n = Number(input[0]);
const parents = input[1].split(" ").map(Number);
const removeNode = Number(input[2]);

const arr = input.map(Number);
let result = [];

function postOrder(start, end){
  
  if(start > end) return;

  const root = arr[start];
  let pivot = start + 1;

  while(pivot <= end && input[pivot] < root){
    pivot++;
  }

  postOrder(start + 1, pivot -1);
  postOrder(pivot, end);

  console.log(root);

}

postOrder(0, input.length - 1);
