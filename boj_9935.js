const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let str = input[0];
const bomb = input[1];

const stack = [];

for(let ch of str){
  stack.push(ch);
  let match = true;

  if(stack.length >= bomb.length){
    for(let i =0; i < bomb.length; i++){
      if(stack[stack.length - bomb.length + i] !== bomb[i]){
        match = false;
        break;
      }
    }

    if(match){
      stack.length -= bomb.length;
    }
  }
}

const result = stack.join("");
console.log(result === "" ? "FRULA" : result);