function solution(answers) {
    var answer = [];
    const stuA = [1,2,3,4,5];
    const stuB = [2,1,2,3,2,4,2,5];
    const stuC = [3,3,1,1,2,2,4,4,5,5];
    const score = new Array(3).fill(0);
    
    for(let i=0; i < answers.length; i++){
        let curr = answers[i];
        
        if(stuA[i%stuA.length] === curr){
            score[0]++;
        }
        if(stuB[i%stuB.length]=== curr){
            score[1]++;
        }
        if(stuC[i%stuC.length]=== curr){
            score[2]++;
        }
    }
    
    let max = Math.max(...score);
    
    for(let i =0; i < score.length; i++){
        if(max === score[i]){
            answer.push( i + 1);
        }
    }
    
    return answer;
}