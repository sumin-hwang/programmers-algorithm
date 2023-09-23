function solution(msg) {
    var answer = [];
    var map = new Map();
    
    for(let i =1; i <= 26; i++){
        map.set(String.fromCharCode(64+i), i);
    }
    
    let temp = "";
    for(let i =0; i < msg.length; i++){
        temp += msg[i];
        if(!map.has(temp)){
            answer.push(map.get(temp.slice(0, -1)));
            map.set(temp, map.size + 1);
            temp = msg[i];
        }
    }
    
    if(temp){
        answer.push(map.get(temp));
    } 
    
    return answer;
}