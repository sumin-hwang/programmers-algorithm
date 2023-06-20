function solution(citations) {
    var answer = 0;
    citations.sort((a,b) => b - a);
    
    let i = 0;
    
    while(i+1 <= citations[i]){
        i++;
    }
    
    return i;
    
}
