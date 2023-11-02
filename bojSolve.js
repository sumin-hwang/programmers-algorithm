let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split(" ");

let hour = input[0];
let min = input[1];

if(min >= 45){
    min -= 45;    
}else{
    min = 60 + (min - 45);
    hour -= 1;
}

console.log(hour, min);