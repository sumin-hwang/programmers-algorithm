function solution(maps) {
    var answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({ length : n}, () => Array(m).fill(false));
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    function bfs(x, y){
        const q = [[x, y]];
        visited[x][y] = true;
        let front = 0;
        
        while(front < q.length){
            const [cx, cy] = q[front++];
            
            for(let i =0; i < 4; i++){
                const [nx, ny] = [cx + dx[i], cy + dy[i]];
                
                if(nx >= 0 && nx < n && ny >= 0 && ny < m){
                    if(maps[nx][ny] === 1) {
                        maps[nx][ny] = maps[cx][cy] + 1;
                        q.push([nx, ny]);
                    }
                } 
            }
        }
    }
    
    bfs(0,0);
    
    maps[n - 1][m - 1] === 1 ? answer = -1 : answer = maps[n-1][m-1];
    
    return answer;
}