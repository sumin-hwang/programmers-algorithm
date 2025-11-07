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
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const a = require("fs").readFileSync("/dev/stdin")

//배열을 받아서 숫자로 저장하기
let inputNumberNL =require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => Number(c));
let inputStringNL = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let inputSpaceNumber = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split(' ').map(c => Number(c));
let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let input1 = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => c.split(" ").map(c => Number(c)));

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map(c => c.trim());

let minRepaint = Infinity;

for(let i =0; i <= N - 8; i++){
  for(let j =0; j <= M - 8; j++){
    let repaintW = 0; // W로 시작하는 경우
    let repaintB = 0; // B로 시작하는 경우 

    for(let x =0; x < 8; x++){
      for(let y = 0; y < 8; y++){
        const current = board[i + x][j + y];
        const isEven = (x + y)%2 === 0;

        if(isEven){ // 시작색이 나와야하는데 아닌 경우,
          if(current !== "W") repaintW++; // W로 시작하는 체스판의 경우
          if(current !== "B") repaintB++;
        }else{      // 시작색 반대색이 나와야하는데 아닌 경우
          if(current !== "B") repaintW++;
          if(current !== "W") repaintB++;
        }
      }
    }
    minRepaint = Math.min(minRepaint, repaintW, repaintB);
  }
}

console.log(minRepaint);