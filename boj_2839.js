let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());

let count = 0;
let total = N;

while (total >= 0) {
  if (total % 5 === 0) {
    count += total / 5;
    console.log(count);
    return;
  }
  total -= 3;
  count++;
}

console.log(-1);
