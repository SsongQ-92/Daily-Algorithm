// Stack 구현 with LinkedList
// push - 데이터 삽입
// pop - 데이터 제거
// peek - 데이터 참조
// isEmpty - 스택이 비어있는지 확인

import { LinkedList } from '../250315/LinkedList.mjs';

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
  }

  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  peek() {
    return this.list.count ? this.list.getNodeAt(0) : null;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Stack };

