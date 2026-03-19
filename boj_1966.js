let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let t = Number(input[0]);
let line = 1;
let answer = [];

for (let i = 0; i < t; i++) {
  const [n, m] = input[line++].split(" ").map(Number);
  const pri = input[line++].split(" ").map(Number);

  let queue = pri.map((v, idx) => ({idx, v}));
  let count = 0;

  while(queue.length){
    const cur = queue.shift();

    if(queue.some(p => p.v > cur.v)){
      queue.push(cur);
    }else{
      count++;
      if(cur.idx === m){
        answer.push(count);
        break;
      }
    }
  }
}

console.log(answer.join("\n"));