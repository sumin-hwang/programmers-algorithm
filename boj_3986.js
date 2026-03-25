let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');const N = Number(input.shift());
let count = 0;

for (let i = 0; i < N; i++) {
  let str = input[i];
  let stk = [];

  for (let ch of str) {
    if (stk.length && stk[stk.length - 1] === ch) {
      stk.pop();
    } else {
      stk.push(ch);
    }
  }

  if (stk.length === 0) count++;
}

console.log(count);