function solution(places) {
    return places.map(place => isSafe(place) ? 1 : 0);
}

function isSafe(place) {
    const board = place.map(v => v.split(''));

 

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {

            if (board[i][j] !== 'P') continue;

            const visited = Array.from({ length: 5 }, () =>
                Array(5).fill(false)
            );

            const queue = [[i, j, 0]];
            visited[i][j] = true;

            while (queue.length) {
                const [x, y, dist] = queue.shift();

                if (dist >= 2) continue;

                for (let d = 0; d < 4; d++) {
                    const nx = x + dx[d];
                    const ny = y + dy[d];

                    if (nx < 0 || ny < 0 || nx >= 5 || ny >= 5)
                        continue;

                    if (visited[nx][ny])
                        continue;

                    if (board[nx][ny] === 'X')
                        continue;

                    if (board[nx][ny] === 'P')
                        return false;

                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }
    }

    return true;
}