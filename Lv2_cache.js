function solution(cacheSize, cities) {
    var answer = 0;
    var caches = [];
    cities = cities.map(c => c = c.toLowerCase());
    
    if(cacheSize === 0){
        answer = cities.length *5;
    }else{
        for(let e of cities){
    if(caches.length < cacheSize){
        if(caches.includes(e)){               
            caches = caches.filter(c => c !==e);
            caches.push(e);
            answer +=1;
        }else{
            caches.push(e);
            answer += 5;
        }
    }else{
        if(caches.includes(e)){               
            caches = caches.filter(c => c !==e);
            caches.push(e);
            answer +=1;
        }else{
            caches.shift();
            caches.push(e);
            answer += 5;
        }
    }
 }
    }
    
    return answer;
}