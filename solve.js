function solve(grid) {
  const n = grid.length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  let start, end;

  // 출발지(1), 목적지(4) 찾기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) start = [i, j];
      if (grid[i][j] === 4) end = [i, j];
    }
  }

  // 방문 배열: visited[x][y][hasRemoved]
  const visited = Array.from({ length: n }, () => 
    Array.from({ length: n }, () => [false, false])
  );

  const queue = [[...start, 0]]; // [x, y, hasRemoved]
  visited[start[0]][start[1]][0] = true;

  while (queue.length > 0) {
    const [x, y, hasRemoved] = queue.shift();

    if (grid[x][y] === 4) return hasRemoved; // 목적지 도착

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      const cell = grid[nx][ny];

      if (cell === 3) continue; // 검은차는 절대 통과 불가

      // 그냥 지나갈 수 있는 경우
      if (cell === 0 || cell === 4 || cell === 1) {
        if (!visited[nx][ny][hasRemoved]) {
          visited[nx][ny][hasRemoved] = true;
          queue.push([nx, ny, hasRemoved]);
        }
      }
      // 빨간차(2)는 안 치운 상태에서만 치우고 이동 가능
      else if (cell === 2 && hasRemoved === 0) {
        if (!visited[nx][ny][1]) {
          visited[nx][ny][1] = true;
          queue.push([nx, ny, 1]);
        }
      }
    }
  }

  return -1; // 도달 불가
}

