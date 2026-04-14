const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const tree = Array.from({length : N + 1}, () => []);
const q = Number(input[N]);

let result = [];

for(let i =1; i < N ; i++){
    const [a, b] = input[i].trim().split(" ").map(Number);

    tree[a].push(b);
    tree[b].push(a);
}

for(let i = N + 1; i < input.length; i++){
    const [t, k] = input[i].trim().split(" ").map(Number);
    
    if(t === 2){    //모든 간선은 단절선이다
        result.push("yes");
    }else{
        if(tree[k].length >= 2){ // 간선이 2개 이상이면 단절점, length로 확인
            result.push("yes");
        }else{
            result.push("no");
        }
    }
}

console.log(result.join("\n"));

/**
 * 트리 : 트리는 사이클이 없는 연결 그래프
 * 단절선 - 트리에서 모든 간선은 단절선
 * 단절점 - 연결된 간선이 2개 이상인 모든 정점은 단절점
 * 
 */