const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const N = Number(input.shift());
let graph = Array.from(Array(N + 1), () => []);
let visited = Array.from(N + 1).fill(false);
let arr = [];

for(let str of input){
    const [x, y] = str.split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

const dfs = (graph, start, visited) => {
    let stack = [start];
    
    while(stack.length){
        const v = stack.pop();

        if(!visited[v]){
            visited[v] = true;
        }

        for(let i = graph[v].length - 1; i >= 0; i--){
            const next = graph[v][i];

            if(!visited[next]){
                stack.push(next);
                arr[next] = v;
            }
        }
    }
}

dfs(graph,1, visited);

console.log(arr.slice(2).join("\n"));
