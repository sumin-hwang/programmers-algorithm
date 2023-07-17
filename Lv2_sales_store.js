function solution(want, number, discount) {
    var answer = 0;
    let i =0;
    
    while(i + 10 <= discount.length){
        var map = new Map();
        let tempArr = discount.slice(i, i + 10);
        let includeArr = want.filter(c => tempArr.includes(c));
        
        if(includeArr.length === want.length){
            for(let i =0; i < tempArr.length; i++){
                if(map.has(tempArr[i])){
                    map.set(tempArr[i], map.get(tempArr[i])+1);
                }else{
                    map.set(tempArr[i], 1);
                }
            }
            
            let cnt = 0;
            for(let i =0; i < want.length; i++){
                if(map.get(want[i]) === number[i]){
                    cnt++;
                }
            }
            if(cnt === want.length){
                answer++;
            }
        }
        i++;
    }
    
        return answer;
    
}