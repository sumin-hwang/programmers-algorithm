const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const word = input[0].toUpperCase();
let obj = {};

for(let i =0; i < word.length; i++){
    if(Object.keys(obj).includes(word[i])){
        obj[word[i]]++;
    }else{
        obj[word[i]] = 1;
    }
}

let objValue = Object.values(obj);
let max = Math.max(...objValue);
let cnt = objValue.filter(c => c === max);
let idx = objValue.findIndex(c => c === max);

if(cnt.length > 1){
    console.log('?')
}else{
    let keyValue = Object.keys(obj);
    console.log(keyValue[idx]);
}
