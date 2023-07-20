function solution(progresses, speeds) {
    var answer = [];
    var work = progresses.map((c, i) =>Math.ceil((100 - c)/ speeds[i]));
    
    let max = work[0];
    let count = 1;
    
    for(let i =1; i < work.length; i++){
        if(work[i] <= max){
            count++;
        }else{
            max = work[i];
            answer.push(count);
            count = 1;
        }
        
    }
    answer.push(count);
    console.log(answer);
    
    
    return answer;
}