const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input.shift());
let count = 0;
let answer = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];


for(let i =0; i < T; i++){
    const [M, N, K] = input.shift().split(" ").map(Number);
    const graph = Array.from(Array(N), () => Array(M).fill(0));
    const visited = Array.from(Array(N), () => Array(M).fill(false));

    for(let j =0; j < K; j++){
        const [x, y] = input.shift().split(" ").map(Number);
        graph[y][x] = 1;
    }

    let count = 0;
    for(let y = 0; y < N; y++){
        for(let x = 0; x< M; x++){
            if(graph[y][x] === 1 && !visited[y][x]){
                dfs(x, y, graph, visited, N, M);
                count++;
            }
        }
    }

    answer.push(count);

}


function dfs(x, y, graph, visited, N, M) {
    if(graph[y][x] === 1 && visited[y][x] === false){
        visited[y][x] = true;

        for(let i =0; i <4; i++){
            const [newY, newX] = [y + dy[i], x + dx[i]];
            if(newY >= 0 && newY < N && newX >= 0 && newX < M ){
                dfs(newX, newY, graph, visited, N, M);
            }
        }
    }
}

answer.map(c => console.log(c));

