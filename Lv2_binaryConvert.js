function solution(s) {
    var answer = [];
    let temp = s;
    
    let count  =0;
    let zeroCount = 0;
    
    while(s!=="1"){
        let zeros = s.split("0").length - 1;
        zeroCount += zeros;
        
        let ones = s.replaceAll("0","");
        s = ones.length.toString(2);
        
        count++;
    }
    
   
    return [count, zeroCount];
    
}