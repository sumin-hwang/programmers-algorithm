const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input.shift().split(" ").map(Number);
let graph = Array.from({ length: N + 1 }, () => []);
let visited = new Array(N + 1).fill(0); // 방문 순서 기록
let order = 1;

// 그래프 구성
for (let str of input) {
    const [x, y] = str.split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

// 인접 노드를 오름차순 정렬
graph.forEach((e) => e.sort((a, b) => a - b));

function dfs(graph, start, visited) {
    const stack = [start];

    while (stack.length) {
        const v = stack.pop();

        if (visited[v] === 0) {
            visited[v] = order++;

            // 역순으로 push해야 오름차순으로 방문됨
            for (let i = graph[v].length - 1; i >= 0; i--) {
                const next = graph[v][i];
                if (visited[next] === 0) {
                    stack.push(next);
                }
            }
        }
    }
}

dfs(graph, R, visited);

// 출력
console.log(visited.slice(1).join('\n'));