function solution(land) {
    var answer = 0;
    
    for(let i=1; i < land.length; i++){
        for(let j = 0; j < 4; j++){
            let max = 0;
            
            for(let k =0; k < 4; k++){
                if(k !== j){
                    max = Math.max(max, land[i-1][k]);
                }
            }
            
            land[i][j] += max;
        }
    }
    
    return Math.max(...land[land.length - 1]);
    

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}