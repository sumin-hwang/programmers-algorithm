function solution(participant, completion) {
    var answer = '';
    let part = participant.sort();
    let comp = completion.sort();
    
    for(let i =0; i < part.length; i++){
        let curr = completion[i];
        if(part[i]!== curr){
            return part[i];
        }
    }
    
    return answer;
}