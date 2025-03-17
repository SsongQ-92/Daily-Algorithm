// 추상자료형
// 1. 모든 데이터 출력 - printAll()
// 2. 모든 데이터 제거 - clear()
// 3. 원하는 인덱스에 데이터 삽입 - insertAt(index, data)
// 4. 마지막 데이터 뒤에 데이터 삽입 - insertLast(data)
// 5. 원하는 인덱스의 데이터 삭제 - deleteAt(index)
// 6. 마지막 데이터 삭제 - deleteLast()
// 7. 원하는 인덱스의 데이터 읽기 - getNodeAt(index)

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode !== null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode !== null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index < 0 || index > this.count) {
      throw new Error("Invalid index");
    }

    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;

      if (this.head !== null) {
        this.head.prev = newNode;
      }

      this.head = newNode;
    } else if (index === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      currentNode.next.prev = newNode;
    }

    if (newNode.next === null) {
      this.tail = newNode;
    } 

    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("Invalid index");
    }

    let currentNode = this.head;

    if (index === 0) {
      let deleteNode = this.head;

      if (this.head.next !== null) {
        this.head = null;
        this.tail = null;
      } else {  // 리스트에 노드가 하나만 있는 경우
        this.head = this.head.next;
        this.head.prev = null;
      }

      this.count--;

      return deleteNode;
    } else if (index === this.count - 1) {
      let deleteNode = this.tail;
      
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count--;

      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count--;

      return deleteNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("Invalid index");
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

export { Node, DoublyLinkedList };
