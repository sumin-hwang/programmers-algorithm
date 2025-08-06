const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const K = parseInt(input[0]);
let line = 1;

function bfs (graph, start, visited){
    const q = [start];
    visited[start] = 1;
    let front = 0;

    while(front < q.length){
        const v = q[front++];
        for(const next of graph[v]){
            if(!visited[next]){
                visited[next] = -visited[v];
                q.push(next);
            }else if (visited[next] === visited[v]){
                return false;
            }
        }
    }
    return true;
}

for (let t = 0; t < K; t++) {
    const [V, E] = input[line++].split(" ").map(Number);
    const graph = Array.from({ length: V + 1 }, () => []);
    const visited = Array(V + 1).fill(0);

    for (let i = 0; i < E; i++) {
        const [x, y] = input[line++].split(" ").map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }

    let isGraph = true;

    for (let i = 1; i <= V; i++) {
        if (visited[i] === 0) {
            if (!bfs(graph, i, visited)) {
                isGraph = false;
                break;
            }
        }
    }
    console.log(isGraph ? 'YES' : 'NO');
}