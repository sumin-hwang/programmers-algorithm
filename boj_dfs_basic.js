
const [N, M, R] = input.shift().split(" ").map(Number);
const graph = Array.from({ length : N + 1}, () => []);
const visited = new Array(N + 1).fill(0);
let order = 1;

for(let str of input){
  const [x, y] = str.split(" ").map(Number);

  graph[x].push(y);
  graph[y].push(x);
}

graph.forEach((e) => e.sort((a,b) => a - b));

function dfsStack(start) {
  const stack = [start];
  visited[start] = true; // start 방문처리

  while (stack.length) {
    const v = stack.pop();

    for (let i = graph[v].length - 1; i >= 0; i--) {
      const next = graph[v][i];
      if (!visited[next]) {
        visited[next] = true; // 방문처리 여기서 한 번만 함. 
        stack.push(next);
      }
    }
  }
}
dfs(graph, R, visited);





console.log(visited);