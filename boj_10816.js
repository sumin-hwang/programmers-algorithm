
const N = Number(input[0]);
const card = input[1].split(" ").map(Number);
const M = Number(input[2]);
const quiz = input[3].split(" ").map(Number);


let map = new Map();

for(let i=0; i< card.length; i++){
    if(!map.has(card[i])){
        map.set(card[i], 1);
    }else{
        map.set(card[i], map.get(card[i]) + 1);
    }
}

let answer = [];
for(let i = 0; i < quiz.length; i++){
    if(map.has(quiz[i])){
        answer.push(map.get(quiz[i]));
    }else{
        answer.push(0);
    }
}

console.log(answer.join(" "));