let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input[0]);
const dp = new Array(12).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for(let i =4; i <= 10; i++){
    dp[i] = dp[i - 1] + dp[i - 2 ] + dp[i - 3];
}

let result = [];
for(let i =1; i <= T; i++){
    result.push(dp[Number(input[i])]);
}

result.map(c => console.log(c));