function solution(s) {
    var answer = '';
    var arr = s.split(" ");
    
    answer = arr.map(c => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()).join(" ");
   
    return answer;
}