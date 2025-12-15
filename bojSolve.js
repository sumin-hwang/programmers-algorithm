// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const { fileURLToPath } = require('url');

// const input = require("fs")
//  .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

//let input =require('fs').readFileSync('/dev/stdin').toString().trim()

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');


// const fs = require("fs");
// const input = fs.readFleSync("/dev/stdin").toString().trim().split("\n");
// const a = require("fs").readFileSync("/dev/stdin")

//배열을 받아서 숫자로 저장하기
let inputNumberNL =require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => Number(c));
let inputStringNL = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let inputSpaceNumber = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split(' ').map(c => Number(c));
let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().trim().split('\n');
let input1 = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n').map(c => c.split(" ").map(c => Number(c)));

const [M, N, K] = input[0].split(" ").map(Number);

// map[y][x]
const map = Array.from({ length: M }, () => Array(N).fill(0));
const visited = Array.from({ length: M }, () => Array(N).fill(false));

// 직사각형 채우기
for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      map[y][x] = 1;
    }
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// DFS
const dfs = (sy, sx) => {
  let count = 1;
  const stack = [[sy, sx]];
  visited[sy][sx] = true;

  while (stack.length) {
    const [y, x] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny >= 0 && ny < M && nx >= 0 && nx < N) {
        if (!visited[ny][nx] && map[ny][nx] === 0) {
          visited[ny][nx] = true;
          stack.push([ny, nx]);
          count++;
        }
      }
    }
  }

  return count;
};

const answer = [];

// 전체 탐색
for (let y = 0; y < M; y++) {
  for (let x = 0; x < N; x++) {
    if (!visited[y][x] && map[y][x] === 0) {
      answer.push(dfs(y, x));
    }
  }
}

answer.sort((a, b) => a - b);

// 출력
console.log(answer.length);
console.log(answer.join(" "));