const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const N = Number(input.shift());
let arr = input[0].split(" ").map(Number);

arr  = arr.sort((a,b) => a - b);

let total = 0;
let sum = 0 ;

for(let i = 0; i < N; i++){
    sum += arr[i];
    total += sum;
}

console.log(total);