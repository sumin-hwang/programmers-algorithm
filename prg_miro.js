function solution(maps) {
    var answer = 0; 
    const n = maps.length;
    const m = maps[0].length;
    const start = [];
    const lever = [];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    for(let i=0; i < n; i++){
        for(let j =0; j < m; j++){
            if(maps[i][j] === 'S'){
                start.push(i, j);
                continue;
            }
            if(maps[i][j] === 'L'){
                lever.push(i, j);
                continue;
            }
            
        }
    }
    
    function bfs(x, y, target){
        const visited = Array.from({length : n}, () => Array(m).fill(false));
        const q = [[x, y, 0]];
        visited[x][y] = true;
        let front = 0;
        
        while(front < q.length){
            const [cx, cy, dist] = q[front++];
            
            if(maps[cx][cy] === target){
                return dist;
            }
            
            for(let i=0; i < 4; i++){
                const nx = cx + dx[i];
                const ny = cy + dy[i];
                
                if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if(maps[nx][ny] === "X") continue;
                
                if(!visited[nx][ny] ){
                    q.push([nx, ny, dist + 1]);
                    visited[nx][ny] = true;
                }
            }
            
        }
        return -1;
    }
    
    let first = bfs(start[0], start[1], "L");
    let next = bfs(lever[0], lever[1], "E");
    
    if(first === -1 || next === -1){
        return -1;
    }
    
    return first + next;
}