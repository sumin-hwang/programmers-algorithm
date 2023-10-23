function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);
    for(let i=0; i<n; i++){
      for(let j=i+1; j<n; j++){
        if(prices[i] > prices[j]) {
          answer[i] = j-i;
          break;
        }
        else {
          answer[i]++
        }
      }
    }
    return answer;
  }
  