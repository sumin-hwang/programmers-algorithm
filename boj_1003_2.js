const T = Number(input[0]);
const dp = Array.from({length : 41}, () => [0, 0]);

dp[0] = [1, 0];
dp[1] = [0, 1];

for(let i =2; i <=40; i++){
    dp[i][0] = dp[i -2][0] + dp[i - 1][0];
    dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}

let result = "";
for(let i = 1; i <= T; i++){
    const n = Number(input[i]);
    result += dp[n][0].toString() +" " +  dp[n][1].toString() + "\n";
}

console.log(result.trim());