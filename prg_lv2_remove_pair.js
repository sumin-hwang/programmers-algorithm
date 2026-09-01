function solution(s)
{
    var answer = -1;
    const stack = [];
    
    for(let i=0; i < s.length; i++){
        let curr = s[i];
        let top = stack[stack.length - 1];
        
        if(i === 0){
            stack.push(curr);
        }else if (top === curr){
            stack.pop();
        }else{
            stack.push(curr);
        }
    }
    
    stack.length === 0 ? answer = 1 : answer = 0;

    return answer;
}