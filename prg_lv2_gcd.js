function solution(arr) {
    // 최대공약수 (gcd)
    function gcd(a,b){
        while(b !== 0){
            let temp = a%b;
            a = b;
            b = temp;
        }
        return a;
    }
    
    // 최소공배수(LCM)
    function lcm(a,b){
        return (a * b) / gcd(a,b);
    }
    
    return arr.reduce((acc, num) => lcm(acc, num));
}