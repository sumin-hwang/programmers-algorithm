function solution(s){
    var answer = -1;
    var arr = s.split("");
    var stack = [arr[0]];
    
    for(let i =1; i < arr.length; i++){
        if(stack[stack.length-1] === arr[i]){
            stack.pop();
        }else{
            stack.push(arr[i]);
        }
    }
    
    stack.length === 0 ? answer = 1 : answer = 0;

    return answer;
}