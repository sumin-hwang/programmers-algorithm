function solution(n) {   
    let nbin = n.toString(2);
    let nbinCnt = nbin.split('').filter(c => c ==="1").length;
    
    let x = n + 1;
    let xbinCnt = 0;
    var temp = x.toString(2).split("");
    
    while(xbinCnt !== nbinCnt){
        temp = x.toString(2).split("");
        xbinCnt = temp.filter(c => c === "1").length;
        temp = parseInt(temp.join(""),2);
        x++;
    }
    
   return temp ;
}