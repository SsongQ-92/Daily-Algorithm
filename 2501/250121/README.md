`next`가 `null`이라는 것은 **다음 노드가 존재하지 않는다는 뜻**입니다. 즉, 현재 노드가 연결 리스트의 마지막 노드라는 의미입니다.

---

### `ListNode` 구조 복습:
```ts
class ListNode {
  val: number;          // 현재 노드의 값
  next: ListNode | null; // 다음 노드의 참조 (없으면 null)

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
```

#### 의미:
- `next`는 현재 노드가 **다음에 연결된 노드를 가리키는 포인터**입니다.
- `next`가 `null`이면 현재 노드가 리스트의 끝이라는 뜻입니다.

---

### `next`와 `next.val` 차이:
1. **`next === null`**:
   - 현재 노드가 마지막 노드로, 이후에 연결된 노드가 없다는 뜻입니다.
   - 예: `[1]` 리스트에서 첫 번째 노드의 `next`는 `null`입니다.

2. **`next.val`**:
   - `next`가 `null`이 아닐 때만 접근 가능하며, 다음 노드의 값을 나타냅니다.
   - 예: `[1, 2]` 리스트에서 첫 번째 노드의 `next.val`은 `2`입니다.

   **주의**: `next`가 `null`인 상태에서 `next.val`에 접근하려고 하면 **런타임 에러**가 발생합니다.

---

### 예제:
```ts
const node3 = new ListNode(4);           // 마지막 노드, next는 null
const node2 = new ListNode(2, node3);   // 두 번째 노드, next는 node3
const node1 = new ListNode(1, node2);   // 첫 번째 노드, next는 node2

console.log(node1.val); // 출력: 1
console.log(node1.next?.val); // 출력: 2 (node2의 값)
console.log(node1.next?.next?.val); // 출력: 4 (node3의 값)
console.log(node1.next?.next?.next); // 출력: null (node3은 마지막 노드)
```

---

### 요약:
- `next === null`: 연결 리스트의 끝을 의미.
- `next.val`: 다음 노드의 값을 나타내며, `next`가 `null`일 때는 접근하면 안 됨.
