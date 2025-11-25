const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
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