let str = input[0];
let set1 = new Set();

for(let i =0; i < str.length; i++){
    for(let j = i; j < str.length; j++){
        set1.add(str.slice(i, j+1))
    }
}

console.log(set1.size);