const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const N = Number(input.shift());
const dp = Array.from({length : N + 1}, () => Array(10).fill(0));

//dp[i][j] 길이가 i 마지막 자리가 j인 계단수의 갯수
const MOD = 1000000000;

for(let i = 1; i <= 9; i++){
    dp[1][i] = 1;
}

for(let i = 2; i <= N; i++){
    for(let j =0; j <= 9; j++){
        if(j === 0){
            dp[i][j] = dp[i-1][1] %MOD; // 뒷자리가 0인 경우는 앞에 1만 올 수 있음
        }else if (j === 9){
            dp[i][j] = dp[i-1][8] %MOD; // 뒷자리가 9인 경우는 앞에 8만 올 수 있음.
        }else{
            dp[i][j] = (dp[i-1][j+1] + dp[i-1][j-1]) %MOD;
        }
    }
}

let result = dp[N].reduce((sum, cur) => (sum + cur)%MOD, 0);
console.log(result);