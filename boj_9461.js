
const N = Number(input.shift());
let answer = [];
for(let i =0; i < N; i++){
    let temp = Number(input[i]);
    console.log(dp(temp)); 
}

function dp (num){
    const dp = new Array(101).fill(1);
    dp[4] = 2;
    dp[5] = 2;
    dp[6] = 3;

    if(num < 7){
        return dp[num];
    }else{
        for(let i = 7; i <= num; i++){
            dp[i] = dp[i - 1] + dp[i - 5];
        }

        return dp[num];
    }
}