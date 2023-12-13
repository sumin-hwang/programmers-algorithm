let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const num = input[0];
const arr = input[1].split(" ");
const v = input[2];

console.log(arr.filter(c => c ===v).length);