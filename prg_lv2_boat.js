function solution(people, limit) {
    var answer = 0;
    let arr = people.sort((a,b) => a - b);
    
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right){
        if(arr[left] + arr[right]  <= limit){
            left++;
        }
        right--;
        answer++;
    }    
    return answer;
}