function solution(babbling) {
    var answer = 0;
    var nephew = ["aya", "ye", "woo", "ma"];
    
    for(let c of babbling){
        for(let i = 0; i < nephew.length; i++){
            if(c.includes(nephew[i].repeat(2))){
               continue;
            }else if(c.includes(nephew[i])){
               c = c.replaceAll(nephew[i], ""); 
            }
            
             
        }
        c.length === 0 ? answer++ : '';
    }
    
    return answer;
}

