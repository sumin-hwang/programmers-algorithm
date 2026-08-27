function solution(s) {
    var answer = '';
    const arr = s.split(" ").map(Number);
    
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    
    answer = min + " " + max;
    
    return answer;
}