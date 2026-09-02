function solution(k, tangerine) {
    var answer = 0
    let map = new Map();
    
    for(let tan of tangerine){
        map.set(tan, (map.get(tan)|| 0) + 1);
    }
    
    let sorted = [...map].sort((a,b) => b[1] - a[1]);
    
    let sum = 0;
    
    for(let i=0; i < sorted.length; i++){
        if(sum < k){
            sum += sorted[i][1];
            answer++;
        }
    }
    
    return answer;
    
}