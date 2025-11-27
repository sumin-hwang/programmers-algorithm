const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const graph = Array.from({ length : N + 1}, () => []);
const visitedD = new Array(N + 1).fill(false);
const visitedB = new Array(N + 1).fill(false);
const answerD = [];
const answerB = [];

for(let str of input){
  const [x, y]  =str.split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

for(let i = 1; i <= N; i++){
  graph[i].sort((a, b) => a - b);
}

const dfs = (graph, start, visited) => {
  visited[start] = true;
  answerD.push(start);

  for(const cur of graph[start]){
    if(!visited[cur]){
      dfs(graph, cur, visited);
    }
  }
}

const dfsS = (graph, start, visited) => {
  const stack = [start];

  while(stack.length){
    const v = stack.pop();
    if(!visited[v]){
      visited[v] = true;

      for(let node of graph[v]){
        if(!visited[node]){
          visited[node] = true;
          stack.push(node);
        }
      }
    }

    
  }
}

const bfs = (graph, start, visited) => {
  const q = [];
  q.push(start);
  visited[start] = true;

  while(q.length){
    const v = q.shift();
    answerB.push(v);
    
    for(const node of graph[v]){
      if(!visited[node]){
        visited[node] = true;
        q.push(node);
      }
    }
  }
}

dfs(graph, V, visitedD);
bfs(graph, V, visitedB);

console.log(answerD.join(" "));
console.log(answerB.join(" "));