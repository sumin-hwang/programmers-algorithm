const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(" ").map(Number);
const arr = Array.from({ length : N + 1}, () => Array(N + 1).fill(0));

for(let i =1; i <= N; i++){
    const row = input[i].split(" ").map(Number);
    for(let j = 1; j <= N; j++){
        arr[i][j] = row[j - 1];
    }
}

const sum = Array.from({length : N + 1}, ()=> Array(N + 1).fill(0));

for(let i = 1; i <= N; i++){
    for(let j = 1; j <= N; j++){
        sum[i][j] = arr[i][j] + sum[i-1][j] + sum[i][j-1] - sum[i-1][j-1];
    }
}

let answer = [];

for(let i = N + 1; i <= N + M; i++){
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

    const result = 
        sum[x2][y2] - sum[x1 -1][y2] - sum[x2][y1 -1] + sum[x1-1][y1-1];

    answer.push(result);
}

answer.map(c=> console.log(c));