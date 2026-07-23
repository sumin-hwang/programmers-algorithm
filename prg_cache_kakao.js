function solution(cacheSize, cities) {
    var answer = 0;
    const cache = new Map();
    cities = cities.map(c => c.toLowerCase());
    
    for(let city of cities){
        if(cacheSize === 0){
            answer += 5;
            continue;
        }
        
        if(cache.has(city)){
            answer+=1;
            cache.delete(city);
            cache.set(city, true);
        }else{
            answer += 5;
            
            if(cache.size >= cacheSize){
                const oldest = cache.keys().next().value;
                cache.delete(oldest);
            }
            cache.set(city, true);
        }
    }
    return answer;
}