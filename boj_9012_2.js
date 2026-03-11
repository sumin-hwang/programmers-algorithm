const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input.shift());

for(let i = 0; i < N; i++){
    let count = 0;
    let isValid = true;

    for(const c of input[i]){
        if(c === '('){
            count++;
        }else{
            count--;
        }

        if(count < 0){
            isValid = false;
            break;
        }
    }

    if(count !== 0) isValid = false;

    console.log(isValid ? "YES" : "NO");
    
}