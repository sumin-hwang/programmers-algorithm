function solution(s) {
    var answer = 0;
    var count = 0;
    var stack = [];
    
    for(let i =0; i < s.length; i++){
        stack.push(s[i]);
        
        const same = stack.filter(c => c === stack[0]);
        const notSame = stack.filter(c => c!==stack[0]);
        
        if(same.length === notSame.length){
            stack = [];
            count++;
        }
    }
    
    if(stack.length !== 0){
        count++;
    }
    return count;
}