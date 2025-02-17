// https://school.programmers.co.kr/learn/courses/30/lessons/42626

class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();
    this._heapifyDown();

    return min;
  }

  peek() {
    return this.heap[0];
  }

  _heapifyUp() {
    let index = this.size() - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[index]) break;

      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;

    while (true) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallest = index;

      if (leftChild < this.size() && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
      }

      if (rightChild < this.size() && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

function solution(scoville, K) {
  const heap = new Heap();
  
  scoville.forEach(num => heap.push(num));

  let mixCount = 0;

  while (heap.size() > 1 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();
    const newScoville = first + second * 2;

    heap.push(newScoville);
    
    mixCount++;
  }

  return heap.peek() >= K ? mixCount : -1;
}
