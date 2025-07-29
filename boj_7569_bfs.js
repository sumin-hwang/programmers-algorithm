const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력 처리
const [M, N, H] = input.shift().split(" ").map(Number); // M: 가로, N: 세로, H: 높이

const box = [];
let q = [];

// 3차원 배열 구성: box[h][n][m]
for (let h = 0; h < H; h++) {
    const layer = [];
    for (let n = 0; n < N; n++) {
        const row = input.shift().split(" ").map(Number);
        layer.push(row);

        // 초기 익은 토마토 위치 저장
        row.forEach((val, m) => {
            if (val === 1) q.push([h, n, m]); // 높이, 행, 열
        });
    }
    box.push(layer);
}

// 6방향 이동: 위, 아래, 앞, 뒤, 왼, 오
const dz = [-1, 1, 0, 0, 0, 0];
const dx = [0, 0, -1, 1, 0, 0];
const dy = [0, 0, 0, 0, -1, 1];

const bfs = () => {
    let front = 0;

    while (front < q.length) {
        const [z, x, y] = q[front++];

        for (let i = 0; i < 6; i++) {
            const nz = z + dz[i];
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nz >= 0 && nz < H && nx >= 0 && nx < N && ny >= 0 && ny < M) {
                if (box[nz][nx][ny] === 0) {
                    box[nz][nx][ny] = box[z][x][y] + 1;
                    q.push([nz, nx, ny]);
                }
            }
        }
    }
};

bfs();

// 결과 확인
let result = 0;
let hasUnripe = false;

for (let h = 0; h < H; h++) {
    for (let n = 0; n < N; n++) {
        for (let m = 0; m < M; m++) {
            if (box[h][n][m] === 0) {
                hasUnripe = true;
                break;
            }
            result = Math.max(result, box[h][n][m]);
        }
    }
}

console.log(hasUnripe ? -1 : result - 1);