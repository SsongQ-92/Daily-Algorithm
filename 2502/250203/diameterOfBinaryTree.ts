// https://leetcode.com/problems/diameter-of-binary-tree/description/

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


function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  function depth(node: TreeNode | null): number {
    if (node === null) return 0;
    
    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);
    
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
    
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  depth(root);

  return maxDiameter;
};
