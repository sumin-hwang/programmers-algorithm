const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
let arr = new Array(N + 1).fill(true);

for(let i = 1; i <= N; i++){
  let temp = i.toString();

  if(temp.length > 2){
    let diff = Number(temp[0]) - Number(temp[1]);

    for(let j = 1; j < temp.length - 1; j++){
      if(Number(temp[j]) - Number(temp[j + 1]) !== diff){
        arr[i] = false;
      }
    }
  }
}

console.log(arr.filter(c => c === true).length - 1);