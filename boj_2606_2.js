const N = Number(input.shift());
const M = Number(input.shift());

const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N + 1).fill(false);

for (let str of input) {
  const [x, y] = str.split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function dfs(graph, start, visited) {
  const stack = [start];

  while (stack.length) {
    const v = stack.pop();
    if (!visited[v]) {
      visited[v] = true;
      for (let next of graph[v]) {
        if (!visited[next]) stack.push(next);
      }
    }
  }
}

dfs(graph, 1, visited);

console.log(visited.filter(v => v).length - 1);
