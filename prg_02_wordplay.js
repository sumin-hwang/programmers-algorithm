function solution(n, words) {
    var answer = [];
    const set = new Set();
    set.add(words[0]);
    
    for(let i =1; i < words.length; i++){
        let word = words[i];
        const person = (i %n) + 1;
        const turn = Math.ceil((i + 1)/n);
        
        if(words[i - 1].at(-1) !== words[i][0]){
            return [person, turn];
        }
        
        if(set.has(word)){
            return [person, turn];
        }
        
        set.add(word);
        
        
    }

    
    return [0,0];
}