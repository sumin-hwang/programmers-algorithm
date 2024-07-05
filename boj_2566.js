let maxArr = [];

for(let i = 0; i < 9; i++){
    maxArr[i] = Math.max(...input1[i]);
}

let max = Math.max(...maxArr);
let rowIdx = maxArr.findIndex(c => c === max);
let colIdx = input1[rowIdx].findIndex( c=> c===max);


console.log(max);
console.log( rowIdx +1, colIdx +1);