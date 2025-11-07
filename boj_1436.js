const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
let count = 0;

for(let i = 666; ; i++){
  
  let temp = i.toString();

  if(!temp.includes('666')){
    continue;
  }else{
    count++;    
  }

  if(count === N){
    console.log(temp);
    break;
  }
}
