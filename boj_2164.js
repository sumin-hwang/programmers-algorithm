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

1 2 3 4 5 6 

1, 1234561
2, 12345612
3, 123456123
4, 1234561234

