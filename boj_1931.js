const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const N = input.shift();
let arr = new Array(Number(N));

let answer = 1;

for(let i = 0; i < N; i++){
    arr[i] = input[i].split(" ").map(Number);
}

arr = arr.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

let end = arr[0][1];

for(let i = 1; i < N; i++){
    let [from, to] = arr[i];
    if(from >= end){
        end = to;
        answer++;
    }
}

console.log(answer);