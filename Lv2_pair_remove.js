function solution(s){
    let answer = 1;
    let arr = s.split("");
    let stack = [];
    
    for(let i=0; i < arr.length; i++){
        if(stack.length === 0){
            stack.push(arr[i]);
        }else if(stack.length > 0 && stack[stack.length - 1] === arr[i]){
            stack.pop();
        }else if (stack.length > 0){
            stack.push(arr[i]);
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}

// 프로그래머스 Lv2. 짝지어 제거하기