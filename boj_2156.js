const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const N = Number(input.shift());
const arr = input.map(Number);
const dp = new Array(N).fill(0);

if (N >= 1) dp[0] = arr[0];
if (N >= 2) dp[1] = arr[0] + arr[1];
if (N >= 3) dp[2] = Math.max(
    arr[0] + arr[1],
    arr[0] + arr[2],
    arr[1] + arr[2]
);

for(let i = 3; i < N; i++){
    dp[i] = Math.max(dp[i - 1], arr[i] + dp[i -2], arr[i] + dp[i - 3] + arr[i -1]);
}

console.log(Math.max(...dp));