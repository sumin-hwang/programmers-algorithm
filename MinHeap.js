class MinHeap {
    constructor(){
        this.heap = [];
    }

    size(){
        return this.heap.length;
    }

    swap(idx1, idx2){
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }

    // 새로운 노드를 추가하는 메서드
    add(value){
        this.heap.push(value);
        this.bubbleUp();
    }

    // node 변경, 위로 올라가는 method
    bubbleUp(){
        let index = this.heap.length - 1; // 마지막 노드
        let parentIdx = Math.floor((index - 1)/2);

        // min heap 에서 새로운 노드가 부모 노드보다 작은 경우
        while(this.heap[parentIdx] && this.heap[index][1] < this.heap[parentIdx][1]){
            this.swap(index, parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index - 1)/2);
        }
    }

    poll(){
        if(this.heap.length === 1){
            return this.heap.pop();
        }

        const value = this.heap[0];
        this.heap[0] = this.heap.pop(); //최상단을 제거하고
        this.bubbleDown();
        return value;
    }

    bubbleDown(){
        let index = 0;
        let leftIdx = index * 2 + 1;
        let rightIdx = index * 2 + 2;

        while((this.heap[leftIdx] && this.heap[leftIdx][1] < this.heap[index[1]]) || //왼쪽 자식 노드가 존재하면서, 값이 루트보다 작거나
            (this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[index][1])    // 오른쪽 자식 노드가 존재하면서, 값이 루트보다 작은경우
        ){
            let smallerIdx = leftIdx; // 
            if(this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[smallerIdx][1]){ // 오른쪽 자식노드가 더 작은 경우
                smallerIdx = rightIdx; 
            }

            this.swap(index, smallerIdx);
            index = smallerIdx;
            leftIdx = index * 2 + 1;
            rightIdx = index * 2 + 2;

        }
    }
}

