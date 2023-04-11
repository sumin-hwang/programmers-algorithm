function solution(N, stages) {
    let answer = [];
    let people = stages.length;
    
    for(let i = 1; i <= N + 1; i++){
        let fail = stages.filter(c => c === i).length;
        answer.push([i, fail/people]);
        people -= fail;
    }
      
    answer.pop();
    answer.sort((a, b) => b[1] - a[1]);
    
    return answer.map(c => c[0]);
}   1