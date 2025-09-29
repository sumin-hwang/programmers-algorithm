const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [total, current, goal, up, down] = input[0].split(" ").map(Number);

const dx = [up, -down];
const visited = new Array(total + 1).fill(false);
const dist = new Array(total + 1).fill(-1); // -1은 아직 도달 불가 상태

const bfs = (start) => {
    const q = [];
    q.push(start);
    visited[start] = true;
    dist[start] = 0;

    while (q.length) {
        const v = q.shift();

        if (v === goal) {
            return dist[v]; // 목표층 도착하면 버튼 누른 횟수 반환
        }

        for (let i = 0; i < dx.length; i++) {
            const nx = v + dx[i];
            if (nx > 0 && nx <= total && !visited[nx]) {
                visited[nx] = true;
                dist[nx] = dist[v] + 1;
                q.push(nx);
            }
        }
    }

    return -1; // 도달 불가
};

const result = bfs(current);
console.log(result === -1 ? "use the stairs" : result);