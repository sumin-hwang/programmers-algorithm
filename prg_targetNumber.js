function solution(numbers, target) {
    var answer = 0;
    // dfs 상태정의 (몇 번째 숫자, 합)
    function dfs(idx, sum){
        if(idx === numbers.length){
            if(sum === target) answer++;
            
            return;
        }
        
        dfs(idx + 1, sum + numbers[idx]);
        dfs(idx + 1, sum - numbers[idx]);
    }
    
    dfs(0, 0);
    
    return answer;
}