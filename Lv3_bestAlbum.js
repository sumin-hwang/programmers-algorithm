function solution(genres, plays) {
    var answer = [];
    const obj = [];
    const map = new Map();
    let rank = [];
    let songs = [];
    
    for(let i =0; i < genres.length; i++){
        obj.push({genre : genres[i], plays : plays[i], index : i});
        
        map.set(genres[i], (map.get(genres[i]) || 0 ) + plays[i]);
    }
    
    rank = [...map].sort((a, b) => b[1] - a[1]).map((c, i) => c[0]);
    
    for(let i=0; i < rank.length; i++){
        let gen = rank[i];
        songs = obj.filter(c => c.genre === gen);
        
        let temp = songs.sort((a,b) => {
            if(a.plays === b.plays){
                return a.index - b.index;
            }else{
                return b.plays - a.plays;
            }
        });
        
        if(temp.length >= 1){
            answer.push(temp[0].index);
        }
        if(temp.length >= 2){
            answer.push(temp[1].index);
        }
        
    }
    
    
    return answer;
}