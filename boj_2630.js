const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

[N, ...paper] = input;
N = Number(N);
paper = paper.map((string) => string.split(" ").map((c => Number(c))));

let white = 0;
let blue = 0;

function divide(x, y, length){
  let count = 0;
  for(let i = x; i < x + length; i++){
    for(let j = y; j < y + length; j++){
      if(paper[i][j]){
        count++;
      }
    }
  }
  if(!count){
    white++;
  }else if (count === length * length){
    blue++;
  }else{
    divide(x, y, length/2);
    divide(x, y + length/2, length/2);
    divide(x + length/2, y, length/2);
    divide(x + length/2, y + length/2, length/2);
  }
}

divide(0, 0, N);
console.log(white);
console.log(blue);