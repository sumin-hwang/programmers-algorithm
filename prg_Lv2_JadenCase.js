function solution(s) {
    var answer = '';
    answer+=s[0].toUpperCase();
    
    for(let i = 1; i < s.length ; i++){
        let curr = s[i];
        let prev = s[i-1];
        
        if(prev === " "){
            answer += curr.toUpperCase();
        }else{
            answer += curr.toLowerCase();
        }
    }
    
    return answer;
}