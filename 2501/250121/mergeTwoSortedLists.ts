// https://leetcode.com/problems/merge-two-sorted-lists/description/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    
    return list2;
  }
};


/**
 * 추가 방법: 반복적 접근법
 * 
 * dummy node를 가장 앞에 두고 계산
 * 위의 재귀적 접근법은 매우 긴 리스트에서는 스택 오버플로우의 위험
 * 
 * current(head)를 계속 이동
 */
function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1); // 더미 노드로 결과 리스트 시작, 시작점 유지
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  // 남아있는 노드 연결
  current.next = list1 !== null ? list1 : list2;

  return dummy.next; // 더미 노드 다음이 실제 결과
}
