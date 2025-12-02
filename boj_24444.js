let fs = require('fs');
const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [N, M, R] = input.shift().split(" ").map(Number);
const graph = Array.from({ length : N + 1}, () => []);
const visited = new Array(N + 1).fill(0);
let order = 1;

for(let str of input){
  const [x, y] = str.split(" ").map(Number);

  graph[x].push(y);
  graph[y].push(x);
}

graph.forEach((e) => e.sort((a, b) => a - b));

const bfs = (graph, start, visited) => {
  const q = [];
  q.push(start);
  visited[start] = order++;

  while(q.length){
    const v = q.shift();

    for(let node of graph[v]){
      if(!visited[node]){
        visited[node] = order++;
        q.push(node);
      }
    }
  }
}

bfs(graph, R, visited);

for(let i = 1; i <= N; i++){
    console.log(visited[i]);
}