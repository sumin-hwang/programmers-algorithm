const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const N = Number(input.shift());
const steps = input.map(Number);
let dp = new Array(N).fill(0);

dp[0] = steps[0];
dp[1] = steps[0] + steps[1];
dp[2] = steps[2] + Math.max(steps[0], steps[1]);

for(let i =3; i<=N; i++){
    dp[i] = Math.max(dp[i - 2] + steps[i], dp[i - 3] + steps[i - 1] + steps[i]);
}

console.log(dp[N-1]);