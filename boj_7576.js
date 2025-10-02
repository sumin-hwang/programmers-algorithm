const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input.shift().split(" ").map(Number);
const graph = input.map(line => line.split(" ").map(Number));

// 방향: 상, 하, 좌, 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// visited 대신 graph를 활용
let q = [];

// 익은 토마토 위치를 먼저 큐에 담기
for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        if(graph[i][j] === 1) {
            q.push([i, j]);
        }
    }
}

const bfs = () => {
    let front = 0;
    while(front < q.length) {
        const [x, y] = q[front++];

        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx >= 0 && nx < N && ny >= 0 && ny < M) {
                if(graph[nx][ny] === 0) {
                    graph[nx][ny] = graph[x][y] + 1;
                    q.push([nx, ny]);
                }
            }
        }
    }
}

bfs();

// 결과 확인
let result = 0;
for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        if(graph[i][j] === 0) {
            console.log(-1);
            return;
        }
        result = Math.max(result, graph[i][j]);
    }
}

// 1부터 시작했으므로 -1
console.log(result - 1);