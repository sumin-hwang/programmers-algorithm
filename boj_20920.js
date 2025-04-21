const a = input.shift();

let map = new Map();

input = input.map(c => c.trim());

for(let e of input){

    if(e.length >= 4){
       if(map.has(e)){
        map.set(e, map.get(e) + 1);
       }else{
        map.set(e, 1);
       }
    }
}

let sortApp = [...map].sort((a,b) => b[1] - a[1]);

let ans = [];
for(e of sortApp){
    ans.push(e[0]);
}

ans.map(c=> console.log(c));