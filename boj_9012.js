const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
const answer = [];

for(let i =0; i < N; i++){
  const line = input[i];
  const stack = [];
  let isValid = true;

  for(let ch of line){
    if(ch === "("){
      stack.push(ch);
    }else{
      if(stack.length === 0){
        isValid = false;
        break;
      }
      stack.pop();
    }

    
  }
  isValid && stack.length === 0 ? answer.push("YES") : answer.push("NO");
}

console.log(answer.join("\n"));