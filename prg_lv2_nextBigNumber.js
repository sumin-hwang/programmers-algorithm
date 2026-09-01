function solution(n) {
    var answer = 0;
    let countOne = n.toString(2).split("").filter(c => c === '1').length;
    
    let num = n;
    
    while(true){
        num = num + 1;
        let count = num.toString(2).split("").filter(c => c === '1').length;
        
        if(countOne === count){
            return num;
        }
    }
    
}