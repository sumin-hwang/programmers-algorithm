function solution(n, lost, reserve) {
    var answer = n - lost.length;
    var realLost = lost.sort((a,b) => a -b).filter(c => !reserve.includes(c));
    var realReserve = reserve.sort((a,b) => a -b).filter(c => !lost.includes(c));
    
    answer += lost.length - realLost.length;
    
    for(let i =0; i < realLost.length; i++){
        if(realReserve.length === 0){
            return answer;
        }else if(realReserve.includes(realLost[i] - 1)){
            realReserve = realReserve.filter(c => c !== realLost[i] - 1);
            answer++;
        }else if(realReserve.includes(realLost[i] + 1)){
            realReserve = realReserve.filter(c => c !== realLost[i] + 1);
            answer++;
        }
    }
    
    return answer;
}