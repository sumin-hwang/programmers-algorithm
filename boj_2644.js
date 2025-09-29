 
const N = Number(input.shift());
const [A, B] = input.shift().split(" ").map(Number);
const M = Number(input.shift());

const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N + 1).fill(false);

// 관계 입력
for(let i = 0; i < M; i++){
    const [x, y] = input[i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

const dfs = (start, target) => {
    const stack = [[start, 0]];
    visited[start] = true;

    while(stack.length){
        const [cur, dep] = stack.pop();

        if(cur === target){
            return dep;
        }

        for(let i = graph[cur].length -1; i >= 0; i--){
            const next = graph[cur][i];
            if(!visited[next]){
                stack.push(next, dep + 1);
            }
        }
    }
}