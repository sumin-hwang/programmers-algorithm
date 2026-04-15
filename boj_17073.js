const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, W] = input.shift().split(" ").map(Number);
const tree = Array.from({length : N + 1}, () => []);
const visited = new Array(N + 1).fill(0);

for(let each of input){
    const [a, b] = each.split(" ").map(Number);

    tree[a].push(b);
    tree[b].push(a);
}

let leafCount = 0;

function dfs(node){
    let isLeaf = true;
    visited[node] = true;

    for(const next of tree[node]){
        if(!visited[next]){
            isLeaf = false;
            dfs(next);
        }
    }

    if(isLeaf) leafCount++;
}

dfs(1);

console.log(W/leafCount);