function solution(topping) {
    var answer = 0;
    let left = new Set();
    let right = new Map();
    
    for(const t of topping){
        right.set(t, (right.get(t) || 0) + 1);
    }
    
    for(const t of topping){
        left.add(t);
        
        right.set(t, (right.get(t) -1));
        
        if(right.get(t) === 0){
            right.delete(t);
        }
        
        if(left.size === right.size){
            answer++;
        }
    }
    
    return answer;
}