
const N = Number(input.shift());
input = input.map(c => c.trim());

let set = new Set();
let answer = 0;


for(let i =0; i < input.length; i++){
    if(input[i] === 'ENTER'){
        answer+= set.size;
        set.clear();
        continue;
    }
    set.add(input[i]);

    if(i === input.length - 1){
        answer += set.size;
    }
}
console.log(answer)