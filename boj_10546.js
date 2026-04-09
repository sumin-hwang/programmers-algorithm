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

for(let [key, value] of map){
    if(value%2===1){
        console.log(key);
    }else{
        continue;
    }
}
