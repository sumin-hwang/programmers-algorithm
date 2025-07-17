// 백준 2606, dfs 문제 

const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const N = Number(input.shift());
const link = Number(input.shift());
const graph = Array.from({length : N + 1}, () => []);
let visited = new Array(N +1).fill(0);
const arr = [];

for(let str of input){
    const [x, y] = str.split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}
graph.forEach((e) => e.sort((a,b) => b - a));

function dfs (graph, start, visited) {
    const stack = [start];
    
    while(stack.length){
        const v = stack.pop();
        if(!visited[v]){
            visited[v] = true;
            for(let i = graph[v].length -1; i >= 0; i--){
                const next= graph[v][i];
                if(!visited[next]){
                    stack.push(next);
                }
            }
        }
    }
}

dfs(graph, 1, visited);

console.log(visited.filter(c => c !== 0).length - 1);