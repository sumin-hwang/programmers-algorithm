let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(" ").map(c => Number(c));
let set = new Set();
let answer = [];

for(let i = 1; i <= N; i++){
    set.add(input[i]);
}

for(let i = N + 1; i <= N + M; i++){
    if(set.has(input[i])){
        answer.push(input[i])
    }
}

answer = answer.sort();
console.log(answer.length);
answer.map(c => console.log(c));