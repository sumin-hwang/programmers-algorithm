let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input.shift());
const tri = input.map(c => c.split(" ").map(Number));

var dp = tri;

dp[1][0] += dp[0][0];
dp[1][1] += dp[0][0];

for(let i =2; i < N ; i++){
    for(let j = 0; j <= i; j++){
        if (j === 0){
            dp[i][j] += dp[i-1][j];
        }else if (j === i){
            dp[i][j] += dp[i-1][j-1];
        }else{
            dp[i][j] = dp[i][j] + Math.max(dp[i - 1][j- 1], dp[i - 1][j]);
        }
        
    }
}

console.log(Math.max(...dp[N - 1]));