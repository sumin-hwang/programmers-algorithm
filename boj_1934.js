let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


const N = input.shift();
let answer = [];

const gcd = (a,b) => a%b === 0 ? b : gcd(b, a%b);

for(let i = 0; i < N; i++){
    let [num1, num2] = input[i].split(" ").map(c => Number(c));
    let temp = gcd(num1, num2);
    answer.push(num1 * num2 / temp);
}

answer.map(c => console.log(c));