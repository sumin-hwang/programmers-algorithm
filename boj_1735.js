let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [A1, B1] = input[0].split(" ").map(c => Number(c));
let [A2, B2] = input[1].split(" ").map(c => Number(c));

const gcd = (a, b) => a%b === 0 ? b : gcd(b, a%b);
const lcm = B1*B2 / gcd(B1, B2);
const num = A1 * lcm/B1 + A2 * lcm/B2;

if(gcd(lcm, num) === 1){
    console.log(num, lcm);
}else{
    let tempgcd = gcd(lcm, num);
    console.log(Math.floor(num/tempgcd), Math.floor(lcm/tempgcd));
}