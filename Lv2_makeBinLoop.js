function solution(s) {
    var answer = [0,0];
    
    while(s !== '1'){
        s = s.split("");
        let temp = s.filter(c => c==='1').length;
        answer[0]++;
        answer[1] += s.length - temp;
        s = temp.toString(2);
    }
    
    return answer;
}