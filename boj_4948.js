
const N = input.pop();
input = input.map(c => Number(c));

const isPrime = (n) => {
    if( n < 2 ) {
        return false;
    }

    for(let i =2; i <= Math.sqrt(n); i++){
        if(n%i==0){
            return false;
        }
    }

    return true;
}

let arr = [];
for(el of input){
    if(el <= 123456){
        let temp = 0;
        for(let i = el + 1; i <= el * 2; i++){
            if(isPrime(i)){
                temp++;
            }
        }
        arr.push(temp);
    }
    
}


arr.map(c => console.log(c));
