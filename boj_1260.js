
const [N, M, V] = input.shift().split(" ").map(Number);
const graph = Array.from({length : N + 1}, () => []);
let visitedDFS= new Array(N +1).fill(0);
let visitedBFS= new Array(N +1).fill(0);
const answerDFS = [];
const answerBFS = [];

for(let str of input){
    const [x, y] = str.split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}
graph.forEach((e) => e.sort((a,b) => a - b ));

const dfs = (graph, start, visitedDFS) => {
    const stack = [start];

    while(stack.length){
        const v = stack.pop();

        if(!visitedDFS[v]){
            visitedDFS[v] = true;
            answerDFS.push(v);
            for(let i = graph[v].length -1; i >= 0; i--){
                const next = graph[v][i];
                if(!visitedDFS[next]){
                    stack.push(next);

                }
            }
        }
    }
}


const bfs = (graph, start, visitedBFS) => {
    const q = [start];
    visitedBFS[start] = true;

    while(q.length){
        const v = q.shift();
        answerBFS.push(v);
        for(const next of graph[v]){
            if(!visitedBFS[next]){
                visitedBFS[next] = true;
                q.push(next);
            }
        }
    }
}

dfs(graph, V, visitedDFS);
bfs(graph, V, visitedBFS);

console.log(answerDFS.join(" "));
console.log(answerBFS.join(" "));