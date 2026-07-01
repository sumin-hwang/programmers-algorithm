function solution(tickets) {
    tickets = tickets.sort();
    const len = tickets.length;
    const visited = Array(len).fill(false);
    let path = ["ICN"];
    let answer = null;
    
    function dfs(curr, count){
        if(count === len){
            answer = [...path];
            return true;
        }
        
        for(let i =0; i < len; i++){
            if(!visited[i] && tickets[i][0] === curr){
                visited[i] = true;
                path.push(tickets[i][1]);
                
                if(dfs(tickets[i][1], count + 1)){
                    return true;
                }
                
                path.pop();
                visited[i] = false;
            }
        }
        return false;
    }
    dfs("ICN", 0);
    return answer;
}