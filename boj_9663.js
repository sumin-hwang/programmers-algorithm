const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const N = Number(input.shift());

let count = 0;
const cols = new Array(N).fill(false);
const diag1 = new Array(2*N - 1).fill(false); // row + col
const diag2 = new Array(2*N - 1).fill(false); // row - col + N -1 (음수 방지);

function solve(row){
  if(row === N){
    count++;
    return;
  }

  for(let col = 0; col < N; col++){
    const d1 = row + col;
    const d2 = row - col + N - 1;

    if(!cols[col] && !diag1[d1] && !diag2[d2]){
      cols[col] = true;
      diag1[d1] = true;
      diag2[d2] = true;

      solve(row + 1);

      cols[col] = false;
      diag1[d1] = false;
      diag2[d2] = false;
    }
  }
}

solve(0);
console.log(count);