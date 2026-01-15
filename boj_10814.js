const N = Number(input.shift());
let arr = Array.from({ length : N}, () => Array(2));

for(let i=0; i <N; i++){
    arr[i] = input[i].split(" ");
    arr[i][0] = Number(arr[i][0]);
}

arr.sort((a,b) => {
    return a[0] - b[0];
})

arr.map(c => console.log(c.join(" ")));