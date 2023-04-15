function solution(lottos, win_nums) {
    let answer = [];
    let rank = [6, 6, 5, 4, 3, 2, 1];
    
    let zeroCnt = lottos.filter(c => c===0).length;
    let minCnt = lottos.filter(c => win_nums.includes(c)).length;
    let maxCnt = minCnt + zeroCnt;
    
    
    return [rank[maxCnt], rank[minCnt]];
}