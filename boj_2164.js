const N = Number(input.shift());
const queue = [];

for(let i = N; i >= 1; i--){
    queue[i-1] = i;
}

let head = 0;

while(head <queue.length - 1){
    head++;
    queue.push(queue[head]);
    head++;
}

console.log(queue[head]);
