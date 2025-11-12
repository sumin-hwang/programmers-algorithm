
const [N, M] = input.shift().split(" ").map(Number); // 4,2

const result = [];
const path = [];

const visited = new Array(N + 1).fill(false);

function backtrack(depth) {
  if(depth === M){
    result.push(path.join(' '));
    return;
  }

  for(let i = 1; i <= N; i++){
    // if(visited[i]) continue;

    // visited[i] = true;
    path.push(i);
    backtrack(depth + 1);
    path.pop();
    // visited[i] = false;
  }
}

backtrack(0);
console.log(result.join("\n"));