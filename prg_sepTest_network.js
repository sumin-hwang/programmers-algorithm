function solution(n, computers) {
    var answer = 0;
    const visited = new Array(n).fill(false);
    
    function dfs(start){
        const stack = [start];
        visited[start] = true;
        
        while(stack.length){
            const v = stack.pop();
            
            for(let i =0; i < n; i++){
                if(!visited[i] && computers[v][i]){
                    visited[i] = true;
                    stack.push(i);
                }
            }
        }
    }
    
    for(let i=0; i < n; i++){
        if(!visited[i]){
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}