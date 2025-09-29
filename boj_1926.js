
const [N, M] = input.shift().split(" ").map(Number);
const paper = input.map(c => c.split(" ").map(Number));
const visited = Array.from(Array(N), ()=> Array(M).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const arr = [];

const dfs = (x, y) => {
    let size = 1;
    visited[x][y] = 1;
    
    for(let i =0; i < 4; i++){
        const [nx, ny] = [dx[i] + x, dy[i]+y];
        
        if(nx >=0 && nx < N && ny >= 0 && ny < M && paper[nx][ny] === 1 && visited[nx][ny] === 0){
            size += dfs(nx, ny, size);
        }
    }

    return size;
}


let count = 0;
const sizes = [];

for(let i = 0; i < N; i++){
    for(let j = 0; j < M; j++){
        if(paper[i][j] === 1 && visited[i][j] === 0){
            count++;
            sizes.push(dfs(i, j));
        }
    }
}

console.log(count);
console.log(Math.max(...sizes));