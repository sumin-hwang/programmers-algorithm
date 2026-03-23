let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let idx = 0;
let answer = [];

for(let line of input){
  if(line === ".") break;

  let stack = [];
  let isValid = true;

  for(let ch of line){
    if(ch === "(" || ch === "["){
      stack.push(ch);
    }else if (ch === ")"){
      if(stack.pop() !== "("){
        isValid = false;
        break;
      }
    }else if (ch === "]"){
      if(stack.pop() !== "["){
        isValid = false;
        break;
      }
    }
  }

  if(stack.length !== 0) isValid = false;

  console.log(isValid ? "yes" : "no");
}