
function getPrime(num){
    const check = Array(num+1).fill(true).fill(false, 0, 2);
    
    for(let i =2; i <= Math.sqrt(num); i++){
        if(check[i]){
            for(let j = i + i; j <= num; j +=i){
                check[j] = false;
            }
        }
    }
    
    return check.filter(c=> c===true).length;
}