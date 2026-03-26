let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const card = input[1].split(" ").map(Number);
let arr = Array(N);

for(let i =0; i < N; i++){
  arr[i] = i + 1;
}

let count = 0;

for(let target of card){
  let idx = arr.indexOf(target);

  if(idx <= arr.length / 2){
    while(arr[0] !== target){
      arr.push(arr.shift());
      count++;
    }
  }
  else{
    while(arr[0] !== target){
      arr.unshift(arr.pop());
      count++;
    }
  }

  arr.shift();
}

console.log(count);