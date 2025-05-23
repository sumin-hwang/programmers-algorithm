
const N = input.shift();
const arr = input.map(c => c.split(" ").map(Number));

let dp = arr;

for(let i =0; i < N; i++){
    if(i === 0){
        dp[i][0] = dp[i][0];
        continue;
    }

    for(let j = 0; j < dp[i].length; j++){
        if(i === 1){
            dp[i][j] = dp[i][j] + dp[i-1][0];
            continue;
        }
        if(j === 0){
            dp[i][j] = dp[i][j] + dp[i-1][j];
        }else if(j === dp[i].length - 1){
            dp[i][j] = dp[i][j] + dp[i-1][j-1];
        }else{
            dp[i][j] = dp[i][j] + Math.max(dp[i-1][j], dp[i-1][j-1]);
        }
    }
}

console.log(Math.max(...dp[dp.length-1]));

