function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;
    
    for(let h = 3; h < total; h++){
        if(total%h === 0){
            let w = total/h;
            
            if(( w - 2) * ( h - 2) === yellow){
                return [w, h];
            }
        }
    }
    
    return answer;
}