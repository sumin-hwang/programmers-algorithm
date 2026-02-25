const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input.shift());
const dp = new Array(N + 1).fill(0);
const T = [];
const P = [];

for(let i =0; i < N; i++){
    let [t, p] = input[i].split(" ").map(Number);
    T.push(t);
    P.push(p);
}

for(let i = N-1; i >=0; i--){
    const nextDay = i + T[i]; //상담 끝나는 날

    if(nextDay <= N){
        dp[i] = Math.max(dp[i + 1], P[i] + dp[nextDay]);
    }else{
        dp[i] = dp[i + 1];
    }
}

console.log(dp[0]);