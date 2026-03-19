const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

let stack = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
    // 여는 괄호면 push
    if (input[i] === '(') {
        stack.push('(');
    } else {
        // 닫는 괄호
        stack.pop();

        if (input[i - 1] === '(') {
            // 레이저인 경우
            result += stack.length;
        } else {
            // 막대기 끝
            result += 1;
        }
    }
}

console.log(result);