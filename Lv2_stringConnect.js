function solution(n, words) {
    let answer = [0, 0];
    
    for(let i =0; i < words.length; i++){
        let word = words[i];
        
        if(i > 0){
            if(words[i-1][words[i-1].length-1] !== words[i][0]){
                return [(i%n) +1 , Math.ceil((i + 1)/n)];
            }
        }
        
        if(words.indexOf(word) !== i){
            return [(i%n) +1 , Math.ceil((i + 1)/n)];
        }
    }
    
    return answer;
}