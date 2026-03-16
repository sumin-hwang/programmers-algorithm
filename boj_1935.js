const N = Number(input.shift());
const str = input.shift().trim();
const nums = input.map(Number);

const stack = [];

for(let char of str){
  if(char >= 'A' && char <= 'Z'){
    stack.push(nums[char.charCodeAt(0) - 65]);
  }else{
    const b = stack.pop();
    const a = stack.pop();

    if (char === '+') stack.push(a + b);
    else if (char === '-') stack.push( a - b);
    else if (char === '/') stack.push(a / b);
    else if (char === '*') stack.push(a * b);
  }
}

console.log(stack[0].toFixed(2));