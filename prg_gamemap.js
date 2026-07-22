function solution(maps) {
    var answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    function bfs(x, y){
        const q = [[x, y]];
        let front = 0;
        
        while(front < q.length){
            const [cx, cy] = q[front++];
            
            for(let i =0; i < 4; i++){
                const nx = cx + dx[i];
                const ny = cy + dy[i];
                
                if (nx < 0 || nx >= n || ny < 0 || ny >= m){
                    continue;
                }
                
                if(maps[nx][ny]!== 1) continue;
                
                maps[nx][ny] = maps[cx][cy] + 1;
                q.push([nx, ny]);
            }
        }
    }
    
    bfs(0, 0);
    
    return maps[n -1][m -1] === 1 ? -1 : maps[n-1][m-1];
}