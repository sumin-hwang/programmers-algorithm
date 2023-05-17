function solution(k, tangerine) {
    var answer = 0;
    var map = new Map();
    
    for(let i =0; i < tangerine.length; i++){
        if(!map.has(tangerine[i])){
            map.set(tangerine[i], 1);
        }else{
            map.set(tangerine[i], map.get(tangerine[i])+1);
        }
    }
    
    var arr = [...map.values()].sort((a,b) => b -a);
    var sum = 0;
    
    for(let i =0; i < arr.length; i++){
        sum+=arr[i];
        answer++;
        if(sum >= k){
            break;
        }
    }
    
    return answer;
}