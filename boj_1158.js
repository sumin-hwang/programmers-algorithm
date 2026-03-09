let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, K] = input.shift().split(" ").map(Number);
let arr = Array.from({ length: N }, (_, i) => i + 1);
let answer = [];
let idx = 0;

while(arr.length > 0){
    idx = (idx + K - 1)%arr.length;
    answer.push(arr.splice(idx, 1)[0]);
}

console.log("<" + answer.join(", ") + ">");