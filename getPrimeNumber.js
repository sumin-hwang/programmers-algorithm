const getPrimeNumber = (num) => {
    const check = Array(num).fill(true);

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(check[i]){
            for(let j = i + i; j <=num; j += i){
                check[j] = false;
            }
        }
    }

    return check;
}