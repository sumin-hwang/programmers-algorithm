const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
let arr = new Array(N);


for(let i =0; i < N; i++){
  const [x, y] = input[i].split(" ").map(Number);
  arr[i] = [x, y];
}

for(let i =0; i < N; i++){
  const [x, y] = arr[i];
  let count = 1;

  for(let j = 0; j < N; j++){
    const [nx, ny] = arr[j];

    if(x === nx && y === ny){
      continue;
    }

    if(x < nx && y < ny){
      count++;
    }
  }

  console.log(count);
}