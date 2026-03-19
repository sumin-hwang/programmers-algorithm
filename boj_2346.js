
const N = input.shift();
const queue = input[0].split(" ").map((v, i) => [i + 1, Number(v)]);

let answer = [];
let idx = 0;

while(queue.length){
  let [num, move] = queue.splice(idx,1)[0];
  answer.push(num);

  if(queue.length === 0) break;

  if(move > 0){
    idx = (idx + move -1 )%queue.length;
  }else {
    idx = (idx + move) %queue.length;
    if(idx < 0) idx += queue.length;
  }
}

console.log(answer.join(" "));