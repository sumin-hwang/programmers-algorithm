function solution(board) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const n = board.length;
    const m = board[0].length;

    let start;

    // 시작 위치 찾기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "R") {
                start = [i, j];
            }
        }
    }

    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    function bfs(xi, yi) {
        const queue = [[xi, yi, 0]];
        visited[xi][yi] = true;

        let front = 0;

        while (front < queue.length) {
            const [x, y, cnt] = queue[front++];

            // 목표 도착
            if (board[x][y] === "G") {
                return cnt;
            }

            // 4방향 탐색
            for (let i = 0; i < 4; i++) {
                let nx = x;
                let ny = y;

                // 벽이나 장애물을 만날 때까지 미끄러짐
                while (true) {
                    const tx = nx + dx[i];
                    const ty = ny + dy[i];

                    if (
                        tx < 0 ||
                        tx >= n ||
                        ty < 0 ||
                        ty >= m ||
                        board[tx][ty] === "D"
                    ) {
                        break;
                    }

                    nx = tx;
                    ny = ty;
                }

                // 멈춘 위치가 처음 방문한 곳이면 큐에 추가
                if (!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, cnt + 1]);
                }
            }
        }

        return -1;
    }

    return bfs(start[0], start[1]);
}