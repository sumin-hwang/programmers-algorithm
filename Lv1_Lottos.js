function solution(lottos, win_nums) {
    var answer = [];
    lottos.sort((a,b) => a - b);
    win_nums.sort((a,b) => a - b);
    
    let noZero = lottos.filter(c=> c!== 0);
    let cntZero = lottos.length - noZero.length;
    let cntSame = 0;
    
    for(let i =0; i < noZero.length; i++){
        for(let j =0; j < win_nums.length; j++){
            noZero[i] === win_nums[j] ? cntSame++ : '';
        }
    }

    let min = cntSame;
    let max = cntZero + cntSame;
    
    const map = new Map();
    map.set(6, 1);
    map.set(5, 2);
    map.set(4, 3);
    map.set(3, 4);
    map.set(2, 5);
    map.set(1, 6);
    map.set(0, 6);
    
    answer.push(map.get(max));
    answer.push(map.get(min));
    
    return answer;
}