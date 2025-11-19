const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
let stack = [];

for(let i = 0; i < N; i++){
  let num = Number(input[i]);

  if(num === 0){
    stack.pop();
  }else{
    stack.push(num);
  }

}

if(stack.length === 0 ){
  console.log(0);
}else{
  stack = stack.map(Number);
  let sum = stack.reduce((cur, i) => cur + i);
  console.log(sum);
}