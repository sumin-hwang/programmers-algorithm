function solution(clothes) {
    var answer = 1;
    const map = new Map();
    
    for(let i =0; i < clothes.length; i++){
        let [name, category] = clothes[i];
        
        if(map.has(category)){
            map.set(category, map.get(category) + 1);
        }else{
          map.set(category, 1);
        }
    }
    
    for(let k of map.values()){
        answer *= k + 1;
    }
    
    return answer -1;
    
    
    return answer;
}