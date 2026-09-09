function solution(n, wires) {
    let answer = Infinity;

    for (let i = 0; i < wires.length; i++) {

        // 매번 새로운 graph 생성
        const graph = Array.from({ length: n + 1 }, () => []);

        for (let j = 0; j < wires.length; j++) {

            // i번째 전선은 아예 추가하지 않음
            if (i === j) continue;

            const [a, b] = wires[j];

            graph[a].push(b);
            graph[b].push(a);
        }

        const visited = Array(n + 1).fill(false);

        function dfs(node) {
            visited[node] = true;

            let count = 1;

            for (const next of graph[node]) {
                if (!visited[next]) {
                    count += dfs(next);
                }
            }

            return count;
        }

        const count1 = dfs(1);
        const count2 = n - count1;

        const diff = Math.abs(count1 - count2);

        answer = Math.min(answer, diff);
    }

    return answer;
}