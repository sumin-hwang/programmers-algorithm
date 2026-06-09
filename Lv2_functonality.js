function solution(progresses, speeds) {
    var answer = [];
    let date = [];
    
    for(let i = 0; i < progresses.length; i++){
        date[i] = Math.ceil((100 - progresses[i])/speeds[i]);
    }
    
    let max = date[0];
    let count = 1;
    
    for(let i = 1; i < date.length; i++){
        if(date[i] <= max){
            count++;
        }else{
            max = date[i];
            answer.push(count);
            count = 1;
        }
    }
    
    answer.push(count);
    
    
    return answer;
}