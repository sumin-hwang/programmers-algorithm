function solution(land) {
    var answer = [];
    const n = land.length;
    const m = land[0].length;
    
    const visited = Array.from({length : n}, () => Array(m).fill(false));
    const result = Array(m).fill(0);
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    function dfs(x, y, cols){
        visited[x][y] = true;
        cols.add(y); // 석유덩어리가 걸쳐져 있는 열
        
        let size = 1;
        
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx <0 || nx >= n || ny <0 || ny >= m) continue;
            
            if(!visited[nx][ny] && land[nx][ny] === 1){
                size += dfs(nx, ny, cols);
            }
        }
        return size;
        
    }
    
    for(let i=0; i < n; i++){
        for(let j = 0; j < m; j++){
            if (land[i][j] === 1 && !visited[i][j]) {

                const cols = new Set();
                const size = dfs(i, j, cols);

                for (const col of cols) {
                    result[col] += size;
                }
            }
            
        }
    }
    
    return Math.max(...result);
}