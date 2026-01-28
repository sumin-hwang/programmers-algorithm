const N = Number(input.shift());

const dp = new Array(N + 1).fill(0);

for(let i =2; i <= N; i++){
    dp[i] = dp[i - 1] + 1; // dp[i] 는 1로 만드는 최소 횟수

    if(i %2 ===0){
        dp[i] = Math.min(dp[i], dp[i/2] + 1); // 2의 배수 일 경우, 1을 더하는 것과, 나누는 것 중에 어떤게 더 최소인지를 찾아서 최소 값을 저장함.
    }else if (i % 3 === 0){
        dp[i] = Math.min(dp[i], dp[i/3] + 1);
    }
}


