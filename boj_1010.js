const N = input.shift();
let answer = [];

const factorial = (n) => {
    let temp = n;
    for(let i = 1; i < n; i++){
        temp *=i;
    }

    return temp;
}


for(let i =0; i < N; i++){
    let [a, b] = input[i].split(" ").map(c => Number(c));
    
    if(a === b){
        let ans = Math.ceil(factorial(b) / (factorial(a)));
        answer.push(ans);
    }else{
        let ans = Math.ceil(factorial(b) / (factorial(a) * factorial(b-a)));
        answer.push(ans);
    }

}

answer.map(c => console.log(c));