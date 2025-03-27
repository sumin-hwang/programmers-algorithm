const N = input.shift();

let stk = [];

for(let i = 0 ; i < N; i++){
    let [a, b] = input[i].split(" ").map(c=> Number(c));
    if(a === 1){
        stk.push(b);
    }else if (a === 2){
        if(stk.length > 0 ){
            let temp = stk.pop();
            console.log(temp);
        }else{
            console.log(-1);
        }
    }else if (a === 3){
        console.log(stk.length);
    }else if (a === 4){
        stk.length === 0 ? console.log(1) : console.log(0);
    }else if (a === 5){
        if(stk.length > 0){
            console.log(stk[stk.length -1]);
        }else{
            console.log(-1);
        }
    }
}