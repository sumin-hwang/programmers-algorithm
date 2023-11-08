let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split(" ");

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let input = require('fs').readFileSync('/dev/stdin').toString().trim()


let cWord = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let word = input[0];
let cnt =0;

for(let i =0; i < cWord.length; i++){
    if(word.includes(cWord[i])){
        word = word.replace(cWord[i], '#');
    }
}  

console.log(word.length);