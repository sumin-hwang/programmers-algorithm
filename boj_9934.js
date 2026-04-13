const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);

const tree = Array.from({ length : N}, () => []);

function calc (start, end, depth){
    if(start > end) return;

    const mid = Math.floor((start + end)/2);
    tree[depth].push(arr[mid]);

    calc(start, mid -1, depth + 1);
    calc(mid + 1, end, depth + 1);
}

calc(0, arr.length -1, 0);

let result = '';
tree.forEach((level) => {
    result += level.join(' ') + '\n';
});

console.log(result.trim());