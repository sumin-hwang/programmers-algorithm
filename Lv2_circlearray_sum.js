function solution(elements) {
    var answer = 0;
    var queue = [...elements, ...elements];
    var arr = [];
    var set = new Set();
    
    let k = 1;
    
    while(k <= elements.length){
        for(let i =0; i < queue.length  - (k-1) ; i++){
            let sum = [];
            sum = queue.slice(i, i+k);
            set.add(sum.reduce((a,b)=> a+b, 0));
        }
        k++;
    }
    
    return set.size;
}

