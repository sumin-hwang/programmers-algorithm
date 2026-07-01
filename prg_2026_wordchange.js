function solution(begin, target, words) {
    const visited = new Array(words.length).fill(false);
    
    function diff(A, B){
        if(A.length !== B.length) return false;
        let cnt = 0;
        
        for(let i =0; i < A.length; i++){
            if(A[i]!== B[i]){
                cnt++;
            }
            if(cnt > 1){
                return false;
            }
        }
        return cnt === 1;
    }
    
    function bfs(start){
        const q = [[start, 0]];
        let front = 0;
        
        while(front < q.length){
            const [curr, depth] = q[front++];
            
            if(curr === target){
                return depth;
            }
            
            for(let i =0; i < words.length; i++){
                if(!visited[i] && diff(curr, words[i])){
                    q.push([words[i], depth + 1]);
                    visited[i] = true;
                }
            }
        }
        
    }
    
    
    return bfs(begin) ?? 0;
    
}