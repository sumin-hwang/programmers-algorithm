const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, K] = input.shift().split(" ").map(Number);
const map = new Array(100001).fill(0);
const visited = new Array(100001).fill(false);
let count = 0;

const bfs = (map, visited, start) => {
  const q = [];
  q.push(start);
  visited[start] = true;

  while(q.length){
    const vx = q.shift();

    if(vx === K){
      return map[vx];
    }

    for(let nx of [vx-1, vx+1, vx*2]){
      if(nx >= 0 && nx <= 100000 && !visited[nx]){
        visited[nx] = true;
        map[nx] = map[vx] + 1;
        q.push(nx);
      }
    }
  }
}

console.log(
bfs(map, visited, N));
