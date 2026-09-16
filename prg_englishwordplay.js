function solution(n, words) {
    var answer = [0, 0];
    const map = new Map();
    
    let first = words[0];
    map.set(first, 1);
    
    for(let i = 1; i < words.length; i++){
        let first = words[i - 1];
        let curr = words[i];
        
        if(first[first.length - 1] !== curr[0] || map.has(curr)){
            let turn = Math.ceil((i + 1)/n);
            let number = (i % n) + 1;
            
            return [number, turn];
        }
        
        map.set(curr, 1);
    }

    return answer;
}