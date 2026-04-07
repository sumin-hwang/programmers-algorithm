let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input.shift().split(" ").map(Number);
const set = new Set();
let ans = 0;

for(let i=0; i < N; i++){
  set.add(input[i].trim());
}

for(let i = N; i < N + M; i++){
  if(set.has(input[i].trim())){
    ans++;
  }
}

console.log(ans);

