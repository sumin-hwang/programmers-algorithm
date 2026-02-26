const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
const dp = new Array(N + 1).fill(0); // i일부터 시작했을 때 얻을 수 있는 최대 수익
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
        dp[i] = Math.max(dp[i + 1], P[i] + dp[nextDay]); //  Math.max(상담을 안한다, 그 날의 이익을 챙기고 그 다음 상담시 이익을 갖는다)
    }else{
        dp[i] = dp[i + 1]; // 상담을 안함, 다음 날로 넘어감
    }
}

console.log(dp[0]); // 가장 먼저부터 시작해야 최대 수익을 낼 수 있다. 