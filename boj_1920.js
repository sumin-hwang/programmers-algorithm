const N = Number(input.shift());
let arr = input[0].split(" ").map(Number);
const M = Number(input[1]);
const quiz = input[2].split(" ").map(Number);

arr = arr.sort((a,b) => a - b);

let answer = [];

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start +end)/ 2);

        if(target < arr[mid]){
            end = mid -1;
        }else if (target > arr[mid]){
            start = mid + 1;
        }else{
            return 1;
        }
    }

    return 0;
}

quiz.forEach((e) => console.log(binarySearch(arr, e)));

