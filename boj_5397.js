const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const target = input.slice(1);
const answer = [];

for (let str of target) {
  const leftStack = [];
  const rightStack = [];

  for (let ch of str) {
    if (ch === '<') {
      if (leftStack.length > 0) {
        rightStack.push(leftStack.pop());
      }
    } else if (ch === '>') {
      if (rightStack.length > 0) {
        leftStack.push(rightStack.pop());
      }
    } else if (ch === '-') {
      if (leftStack.length > 0) {
        leftStack.pop();
      }
    } else {
      leftStack.push(ch);  // ★ 문자 입력 처리
    }
  }

  // ★ join('') 로 해야 됨
  const result = leftStack.concat(rightStack.reverse()).join('');
  answer.push(result);
}

console.log(answer.join('\n'));
