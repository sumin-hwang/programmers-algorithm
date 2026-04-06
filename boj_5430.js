const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input.shift());

for(let i = 0; i < T*3; i = i + 3){
    let order = input[i];
    let length = input[i + 1];
    let arr = JSON.parse(input[i + 2]);

    let answer = calc(order,length, arr);
    console.log(answer);
    
}

function calc (order, length, arr){
    
    let front = 0;
    let back = arr.length - 1;
    let isReverse = false;

    for(let ch of order){
        if(ch === 'R'){
            isReverse = !isReverse; // 일일이 reverse함수 사용할 경우 시간초과, flag만 만들고 나중에 처리한다.
        }else if (ch === 'D'){
            if(front > back){
                return 'error'
            }else{
                if(isReverse === false){
                    front++; //front와 back으로 계산후
                }else if(isReverse === true){
                    back--;
                }
            }
        }
    }

    let result = arr.slice(front, back + 1); // 나중에 slice로 뗀다. 
    if(isReverse) result.reverse();
    return JSON.stringify(result); // JSON.parse와 stringify를 사용하면 배열형태로 출력하거나 배열을 그냥 숫자만 출력할 수 있다.
}