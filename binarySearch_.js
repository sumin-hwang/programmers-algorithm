let left = 0, right = arrayBuffer.length -1;

while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(arr[mid]=== target){
        break;
    }
    if(arr[mid]< target){
        left = mid + 1;
        
    }
}