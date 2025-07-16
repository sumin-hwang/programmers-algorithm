const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const N = Number(input.shift());
const arr = input.map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);

    while (parentIdx >= 0 && this.heap[index] < this.heap[parentIdx]) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  poll() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let leftIdx = index * 2 + 1;
      let rightIdx = index * 2 + 2;
      let smallest = index;

      if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) {
        smallest = leftIdx;
      }

      if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) {
        smallest = rightIdx;
      }

      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }
}

const heap = new MinHeap();
let ans = [];

for (const c of arr) {
  if (c > 0) {
    heap.add(c);
  } else if (c < 0 ){
    heap.add(c * (-1));
  }
  else {
    ans.push(heap.poll());
  }
}

console.log(ans.join('\n'));