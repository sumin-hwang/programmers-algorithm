const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// 1-indexed
let left = Array(N + 1);
let right = Array(N + 1);

// 연결 리스트 구성
for (let i = 1; i <= N; i++) {
  left[i] = i === 1 ? N : i - 1;
  right[i] = i === N ? 1 : i + 1;
}

let result = [];
let cur = 1;

for (let i = 0; i < N; i++) {
  result.push(cur);
  let move = arr[cur - 1];

  // 현재 풍선 제거
  let l = left[cur];
  let r = right[cur];

  right[l] = r;
  left[r] = l;

  if (i === N - 1) break;

  // 이동
  if (move > 0) {
    let next = r;
    for (let j = 1; j < move; j++) {
      next = right[next];
    }
    cur = next;
  } else {
    let next = l;
    for (let j = 0; j < Math.abs(move); j++) {
      next = left[next];
    }
    cur = next;
  }
}

console.log(result.join(' '));