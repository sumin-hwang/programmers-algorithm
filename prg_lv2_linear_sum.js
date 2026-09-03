function solution(elements) {
    var answer = 0;
    
    const n = elements.length;
    const arr = elements.concat(elements);
    
    const sumArr = Array(arr.length + 1).fill(0);
    
    const set = new Set();
    
    for(let i = 0; i < arr.length; i++){
        sumArr[i + 1] = sumArr[i] + arr[i];
    }
    
    for(let i =1; i <= n; i++){
        for(let j = 0; j < n; j++){
            const sum = sumArr[i + j] - sumArr[j];
            
            set.add(sum);
        }
    }
    
    
    return set.size;
}