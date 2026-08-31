function solution(s) {
    var answer = [];
    let count = 0;
    let sum = 0;
    
    while(s !== "1"){
        let length = s.length;
        let countOne = s.split("").filter(c => c === "1").length;
        
        sum += length - countOne;
        
        s = countOne.toString(2); 
        count++;
    }
    
    return [count, sum];
}

