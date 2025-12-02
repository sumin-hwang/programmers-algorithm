
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

const dfs = (graph, start, visited) => {
  const stack = [start];

  while(stack.length){
    const v = stack.pop();

    if(!visited[v]){
      visited[v] = order++;

      for(let i = graph[v].length - 1; i >=0; i--){
        const next = graph[v][i];
        if(!visited[next]){
          stack.push(next);
        }
      }
    }
  }
}

dfs(graph, R, visited);

console.log(visited);