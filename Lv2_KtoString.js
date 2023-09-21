function solution(n, k) {
    var answer = -1;
    var num = n.toString(k).split("0").map(c => Number(c)).filter(e => e!== 1 && e!==0);
    
    for(let i =0; i <= num.length; i++){
        if (isPrime(num[i])){
            answer++;
        }
    }
    
    return answer;
}

function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num% i === 0){
            return false;
        }
    }
    return true;
}