let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input.shift().split(" ").map(Number);
const graph = new Array(N);// visited배열 생성
const visited = Array.from(Array(N), () => Array(M).fill(false)); // visited배열 생성
let count = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for(let i = 0; i < N; i++){
    graph[i] = input[i].split("").map(Number);
}

const bfs = (x, y) => {
    const q = [];
    q.push([x, y]);
    visited[x][y] = true;

    while(q.length){
        const [x1, y1] = q.shift();
        for(let i =0; i < 4; i++){
            const [nx, ny] = [x1 + dx[i], y1 + dy[i]];
            if(nx >= 0 && nx < N && ny >= 0 && ny < M){
                if(graph[nx][ny] === 1 && !visited[nx][ny]){
                    visited[nx][ny] = true;
                    graph[nx][ny] = graph[x1][y1] + 1;
                    q.push([nx, ny]);
                }
            }
        }
    }
}

bfs(0,0);
console.log(graph[N-1][M-1]);