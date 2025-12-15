const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

const visited  = new Array().fill(false);
const map = Array.from(Array(N + 1), () => []);

for(let str of input){
  const [x, y] = str.split(" ").map(Number);
  map[x].push(y);
  map[y].push(x);
}

const dfs = (visited, graph, start) => {
  const stack = [];
  stack.push(start);

  while(stack.length){
    const v = stack.pop();
    if(!visited[v]){
      visited[v] = true;

      for(let i = graph[v].length -1; i >= 0; i--){
        const next = graph[v][i];
        if(!visited[next]){
          stack.push(next);
        }
      }
    }
  

  }
}

let count = 0;
for(let i =1; i <= N; i++){
  if(!visited[i]){
    dfs(visited, map, i);
    count++;
  }
}
console.log(count);