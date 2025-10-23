const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
const T = [];
const P = [];

for(let i = 0; i < N; i++){
  const [t, p] = input[i].split(' ').map(Number);
  T.push(t);
  P.push(p);
}


const dp = Array(N + 1).fill(0);

for(let i = N-1; i >= 0 ;i--){
  if(i + T[i] > N){
    dp[i] = dp[i + 1];
  }else{
    dp[i] = Math.max(dp[i + 1], P[i] + dp[i + T[i]]);
  }
}

console.log(dp[0]);