function solution(board, moves) {
    let answer = 0;
    let stack = [];
    
    for(let i =0; i < moves.length; i++){
       getDoll(moves[i]);
    }
    
    function getDoll(move){
        for(let i =0; i < board[0].length; i++){
            if(board[i][move -1]!==0){   
                let temp = board[i][move -1];
                if(stack[stack.length -1] === temp){
                    stack.pop();
                    answer++;
                }else{
                    stack.push(temp);
                }
                board[i][move -1] = 0;
                break;
            }
        }
    }
    
    return answer *2;
}


