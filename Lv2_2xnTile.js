function solution(n) {
    let dp = [0, 0, 2, 3];
    
    for(let i = 4; i <= n; i++ ){
        dp[i] = (dp[i-1] + dp[i-2])%1000000007;
    }
    
    return dp[n];
}