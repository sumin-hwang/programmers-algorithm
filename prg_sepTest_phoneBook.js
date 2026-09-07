function solution(phone_book) {
    var answer = true;
    const sortedArr = phone_book.sort();
    
    let start = sortedArr[0];
    
    for(let i=1; i < sortedArr.length; i++){
        let curr = sortedArr[i];
        
        if(curr.startsWith(start)){
            return false;
        }
        
        start = curr;
    }
    
    return answer;
}