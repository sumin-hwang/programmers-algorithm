const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');


const N = Number(input.shift());
const map = new Map();

for(let name of input){
    name = name.trim();
    if(!map.has(name)){
        map.set(name, 1);
    }else{
        map.set(name, map.get(name) + 1);
    }
}

const sortedMap = [...map].sort((a,b) => {
    if(a[1] !== b[1]){
        return b[1] - a[1]; // 내림차순
    }

    if(a[0] < b[0]) return -1;
    if(a[0] > b[0]) return 1;

    return 0;
})

console.log(sortedMap[0][0]);