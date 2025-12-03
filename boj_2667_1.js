const N = Number(input.shift());
const map = new Array(N);
const visited = Array.from(Array(N), () => Array(N).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for(let i =0; i < input.length; i++){
  map[i] = input[i].split("").map(Number);
}


const dfs = (x, y) => {
  let count = 1;
  const stack = [[x, y]];
  visited[x][y] = true;

  while(stack.length){
    const [cx, cy] = stack.pop();

    for(let i =0; i < 4; i++){
      const [nx, ny] = [cx + dx[i], cy + dy[i]];

      if(nx >= 0 && nx < N && ny >= 0 && ny < N){ 
        if(!visited[nx][ny] && map[nx][ny] === 1){
          stack.push([nx, ny]);
          visited[nx][ny] = true;
          count++;
        }
        
      }
    }
  }
  return count;
}

const result = [];

for(let i =0; i < N; i++){
  for(let j =0; j < N; j++){
    if(map[i][j] === 1 && !visited[i][j]){
      result.push(dfs(i, j));
    }
  }
}

result.sort((a,b) => a - b);
console.log(result.length);
console.log(result.join("\n"));