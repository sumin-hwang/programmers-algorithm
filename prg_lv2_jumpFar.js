function solution(n) {
    var answer = 0;
    let arr = new Array(n+1).fill(1);
    
    arr[2] = 2;
    
    for(let i = 3; i < arr.length; i++){
        arr[i] = (arr[i - 1] + arr[i - 2])%1234567;
    }
    
    return arr[n];
}