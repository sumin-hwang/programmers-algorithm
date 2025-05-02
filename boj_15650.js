const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [N, M] = input[0].split(" ").map(c => Number(c));
let visited = new Array(N + 1).fill(false);
let result = '';
let output = [];


function backtracking(num, start){
  if(num === M){
    result+= `${output.join(" ")}\n`;
    return;
  }

  for(let i = start; i <= N; i++){
    if(visited[i] === true){
      continue;
    }

    visited[i] = true;
    output.push(i);
    backtracking(num + 1, i);
    output.pop();
    visited[i] = false;
  }
}

backtracking(0, 1);
console.log(result);