function solution(priorities, location) {
    var answer = 0;
    let arr = [];
    let copyPriority = priorities.slice();
    
    for(let i =0; i < priorities.length; i++){
        arr.push(i);
    }
    
    let max = Math.max(...copyPriority);
    
    while(copyPriority.length !== 0 ){
        let max = Math.max(...copyPriority);
        
        if(copyPriority[0] < max){
            copyPriority.push(copyPriority.shift());
            arr.push(arr.shift());
        }else{
            answer++;
            copyPriority.shift();
            console.log(arr.shift());
            if(arr.shift() == location)
                return answer;
        }
    }
    
}

