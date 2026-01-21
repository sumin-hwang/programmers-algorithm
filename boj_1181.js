let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

input.sort((a,b) => 
    {
        if(a.length !== b.length){
            return a.length - b.length
        }else{
            return a.localeCompare(b);
        }
    }
);

let answer = [...new Set(input)];

for(let i =0; i < answer.length; i++){
    console.log(answer[i]);
}

