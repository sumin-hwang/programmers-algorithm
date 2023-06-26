function solution(s) {
    var answer = 0;
    var arr = s.slice();
    var length = arr.length;
    
    if (length%2 === 1){
        return 0;
    }
    
    for(let i =0; i < length; i++){
        let check = calcStack(arr);
        if (check === 0){
            answer++;
        }
        arr = arr.slice(1) + arr[0];
    }
    
    return answer;
}

const calcStack = (arr) => {
    let stack = [];
    
    for(let i =0; i < arr.length; i++){
        if(arr[i] === '(' || arr[i] === '[' || arr[i] === '{'){
            stack.push(arr[i]);
        }else if (arr[i] === ')' && stack[stack.length -1] === '('){
            stack.pop();
        }else if (arr[i] === ']' && stack[stack.length -1] === '['){
            stack.pop();
        }else if (arr[i] === '}' && stack[stack.length -1] === '{'){
            stack.pop();
        }
    }
    
    return stack.length;
}