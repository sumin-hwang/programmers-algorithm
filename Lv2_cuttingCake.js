function solution(topping) {
    var answer = 0;
    const size = topping.length;
    let cs = new Map();
    let br = new Map();
    
    for(let i =0; i < size; i++){
        if(cs.has(topping[i])){
            cs.set(topping[i], cs.get(topping[i])+1);
        }else{
            cs.set(topping[i], 1);
        }
    
    }
    
    for(let i =0; i < size; i++){
        if(cs.get(topping[i])===1){
            cs.delete(topping[i]);
        }else{
            cs.set(topping[i], cs.get(topping[i]) -1);
        }
        
        if(br.has(topping[i])){
            br.set(topping[i], br.get(topping[i])+1);
        }else{
            br.set(topping[i], 1);
        }
        
        if(cs.size === br.size){
            answer++;
        }
    }
    
    
    return answer;
}