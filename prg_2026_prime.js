function solution(numbers) {
    var answer = 0;
    const arr = numbers.split("").map(Number);
    const visited = new Array(arr.length).fill(false);
    const set = new Set();
    
    function isPrime(num){
        if(num < 2){
            return false;
        }
        
        for(let i =2; i*i <= num; i++){
            if(num%i === 0){
                return false;
            }
        }
        return true;
    }
    
    function dfs(curr){
        if(curr.length > 0){
            let num = Number(curr);
            if(isPrime(num)){
                set.add(num);
            }
        }
        
        for(let i=0; i < arr.length; i++){
            if(!visited[i]){
                visited[i] = true;
                dfs(curr + arr[i]);
                visited[i] = false;
            }
        }
    }
    
    dfs('');
    
    return set.size;
}