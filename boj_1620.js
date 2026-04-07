const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.shift().split(" ").map(Number);
const NumMap = new Map();
const NameMap = new Map();
let answer = [];

for(let i= 0; i < N; i++){
  NumMap.set(i + 1, input[i].trim());
  NameMap.set(input[i].trim(), i + 1);
}


for(let i = N; i < N + M; i++){
  let quiz = input[i].trim();

  if(isNaN(quiz)){
    console.log(NameMap.get(quiz));
  }else{
    console.log(NumMap.get(Number(quiz)));
  }

  
}