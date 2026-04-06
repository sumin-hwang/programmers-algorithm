let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
const top = input[0].split(" ").map(Number);

const stack = []; // [인덱스, 높이]
let answer = [];

for(let i =0; i < N; i++){
    while(stack.length > 0 && stack[stack.length - 1][1] <= top[i]){
        stack.pop();
    }

    if(stack.length === 0){
        answer.push(0);
    }else{
        answer.push(stack[stack.length - 1][0] + 1);
    }

    stack.push([i, top[i]]);
}

console.log(answer.join(' '));