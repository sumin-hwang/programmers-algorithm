function solution(n, left, right) {
    var answer = [];
    
    for(let i = left; i <= right; i++){
        let y = i%n;
        let x = Math.floor(i/n);
        
        answer.push(Math.max(x, y) + 1);
    }
    
    return answer;
}
