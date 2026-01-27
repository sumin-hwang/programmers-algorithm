const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [N, C] = input.shift().split(" ").map(Number);

let arr = input.map(Number);
arr = arr.sort((a,b) => a - b);
let answer = 0;

let start = 0;
let end = arr[arr.length - 1] - arr[0];

while(start <= end){
    let mid = parseInt((start + end + 1)/ 2); //임의의 공유기 최소 거리
    let count = 1;
    let last = arr[0];

    for(let i =0; i < N; i++){
        if(arr[i] - last >= mid){
            last = arr[i];
            count++;
        }
    }

    if(count >= C){
        answer = mid;
        start = mid + 1;
    }else{
        end = mid - 1;
    }

}

console.log(answer);

