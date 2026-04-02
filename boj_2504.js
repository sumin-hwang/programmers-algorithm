const input = require('fs').readFileSync(0, 'utf-8').trim();

let stack = [];
let temp = 1;
let result = 0;

for (let i = 0; i < input.length; i++) {
  const cur = input[i];

  if (cur === '(') {
    stack.push(cur);
    temp *= 2;
  } else if (cur === '[') {
    stack.push(cur);
    temp *= 3;
  } else if (cur === ')') {
    if (stack.length === 0 || stack[stack.length - 1] !== '(') {
      result = 0;
      break;
    }

    if (input[i - 1] === '(') {
      result += temp;
    }

    stack.pop();
    temp /= 2;
  } else if (cur === ']') {
    if (stack.length === 0 || stack[stack.length - 1] !== '[') {
      result = 0;
      break;
    }

    if (input[i - 1] === '[') {
      result += temp;
    }

    stack.pop();
    temp /= 3;
  }
}

// 스택이 남아있으면 잘못된 입력
if (stack.length !== 0) result = 0;

console.log(result);