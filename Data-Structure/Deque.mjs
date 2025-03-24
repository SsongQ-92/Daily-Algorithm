// 덱의 추상자료형
// 1. printAll - 모든 데이터 출력
// 2. addFirst - head에 데이터 삽입
// 3. removeFirst - head에서 데이터 제거
// 4. addLast - tail에 데이터 삽입
// 5. removeLast - tail에서 데이터 제거
// 6. isEmpty - 리스트 비었는지 체크

import { DoublyLinkedList } from '../250317/DoublyLinkedList.mjs'

class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  printAll() {
    this.list.printAll();
  }

  addFirst(data) {
    this.list.insertAt(0, data);
  }

  removeFirst() {
    return this.list.deleteAt(0);
  }

  addLast(data) {
    this.list.insertAt(this.list.count, data);
  }

  removeLast() {
    return this.list.deleteLast();
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Deque };
