function solution(s){
    var answer = true;
    let sum = 0;
    
    for(let ch of s){
        if(ch === ')'){
            sum--;
        }else{
            sum++;
        }
        
        if(sum < 0){
            return false;
        }
        
    }
    return sum === 0 ? true : false;
}