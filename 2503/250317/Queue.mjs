// 큐의 추상자료형
// enqueue: 데이터 삽입
// dequeue: 데이터 삭제
// front: 큐의 첫 번째 데이터 참조
// isEmpty: 큐가 비어있는지 확인

import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  enqueue(data) {
    this.list.insertAt(0, data);
  }

  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }

  front() {
    return this.list.count ? this.list.tail : null;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Queue };
