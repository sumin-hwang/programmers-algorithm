function solution(want, number, discount) {
    var answer = 0;
    
    for(let i=0; i < discount.length; i++){
        let slice = discount.slice(i, i + 10);
        let flag = true;
        
        for(let j=0; j < want.length; j++){
            if(slice.filter(c => c === want[j]).length !== number[j]){
                flag = false;
                break;
            }
        }
        
        if(flag) answer++;
    }
    return answer;
}