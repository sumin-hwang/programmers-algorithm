function solution(priorities, location) {
    var answer = 0;
    let arr = [];
    let copy = priorities.slice();
    
    for(let i =0; i < priorities.length; i++){
        arr.push(i);
    }
    
    while(copy.length){
        let max = Math.max(...copy);
        
        if(max > copy[0]){
            copy.push(copy.shift());
            arr.push(arr.shift());
        }else{
            answer++;
            copy.shift();
            if(arr.shift() === location){
                return answer;
            }
        }
    }
    return answer;
}