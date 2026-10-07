function solution(clothes) {
    var answer = 0;
    const map = new Map();
    
    for(let i = 0; i < clothes.length; i++){
        let [peice, category] = clothes[i];
        if(map.has(category)){
            map.set(category, map.get(category)  + 1);
        }else{
            map.set(category, 1);
        }
    }
    
    let temp = 1;
    for(let [key, value] of map){
        if(map.size === 1){
            return value;
        }else{
            temp *= (value + 1);
        }
    }
    
    return temp -1;
}