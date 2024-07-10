const fs = require('fs');
const input1 = fs.readFileSync('/dev/stdin').toString().split('\n').map(c => c.split(" ").map(c => Number(c)));

const cnt = input1[0];

let arr = new Array(100).fill().map(()=> Array(100).fill(0));

for(let i = 0; i < cnt; i++){
    const [x, y] = input1[i+1];
    for(let j = y; j < y + 10; j++){
        for(let k = x; k < x + 10; k++){
            arr[k][j] = 1;
        }
    }
}

let answer = 0;
for(let i =0 ; i < 100; i++){
    answer += arr[i].filter(c => c ===1).length;
}

console.log(answer);