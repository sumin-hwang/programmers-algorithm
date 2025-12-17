
const N = Number(input.shift());
const map = new Array(N);
const list = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for(let i =0; i < input.length; i++){
  map[i] = input[i].split(" ").map(Number);
}

const min = Math.min(...map.flat());
const max = Math.max(...map.flat());

const dfs = (x, y, rain, visited) => {
  const stack = [];
  stack.push([x, y]);

  while(stack.length){
    const [x1, y1] = stack.pop();

    if(!visited[x1][y1]) {
      visited[x1][y1] = true;
    }

    for(let i = 0; i < 4; i++){
      const [nx, ny] = [x1 + dx[i], y1 + dy[i]];

      if(nx >= 0 && nx < N && ny>= 0 && ny < N
        && !visited[nx][ny] && map[nx][ny] > rain){
          stack.push([nx, ny]);
      }
    }
  }
}

let temp = min;
let answer = 0;
while(max > temp){
  
let safeArea = 0;
  
  const visited = Array.from(Array(N), () => Array(N).fill(false));
  for(let i =0; i < N; i++){
    for(let j =0; j < N; j++){
      if(map[i][j] > temp && !visited[i][j]){
        dfs(i, j, temp, visited);
        safeArea++;
      }
    }
  }
  answer = Math.max(answer, safeArea);
  temp++;
}

console.log(answer);