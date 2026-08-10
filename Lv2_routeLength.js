function solution(dirs) {
    const visited = new Set();
    
    let x = 0;
    let y = 0;
    
    const move = {
        U : [0, 1], D : [0, -1], L : [-1, 0], R : [1, 0]
    };
    
    for(const dir of dirs){
        const [dx, dy] = move[dir];
        
        const nx = x + dx;
        const ny = y + dy;
        
        if( nx < -5 || nx > 5 || ny < -5 || ny > 5){
            continue;
        }
        
        const start = `${x},${y}`;
        const end = `${nx},${ny}`;
        
        const path = [start, end].sort().join('-');
        visited.add(path);
        x = nx;
        y = ny;
    }
    
    return visited.size;
}