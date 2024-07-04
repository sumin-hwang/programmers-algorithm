let input = require('fs').readFileSync('C:\\Users\\hsm95\\vscode_\\algorithm\\programmers-algorithm\\example.txt').toString().split('\n');

const [N, M] = input[0].split(" ");
const reverseN = N.split("").reverse().join("");
const reverseM = M.split("").reverse().join("");

console.log(Number(reverseN) > Number(reverseM) ? reverseN : reverseM);