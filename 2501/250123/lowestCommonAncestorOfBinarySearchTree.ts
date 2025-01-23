// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  if (!root) return null;

  // 둘 다 현재 노드보다 작으면 왼쪽으로 이동
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  // 둘 다 현재 노드보다 크면 오른쪽으로 이동
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  // 현재 노드가 LCA인 경우
  return root;
}

/**
 * 이진 탐색 트리의 특징상 p.val < root.val && q.val > root.val 또는 반대 조건을 만족하는 노드
 * 
 * 1. 왼쪽 서브트리의 모든 값 < 현재 노드의 값
 * 2. 오른쪽 서브트리의 모든 값 > 현재 노드의 값
 */
