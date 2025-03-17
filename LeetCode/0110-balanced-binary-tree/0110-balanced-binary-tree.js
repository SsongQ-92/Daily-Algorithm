/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
    // 서브트리의 균형 상태와 높이를 체크하는 함수
    function checkBalanceAndHeight(node) {
        if (!node) return [true, 0]; // 기본 값: 빈 트리는 균형 잡혀 있고, 높이는 0
        
        const [leftBalanced, leftHeight] = checkBalanceAndHeight(node.left);
        const [rightBalanced, rightHeight] = checkBalanceAndHeight(node.right);
        
        // 현재 서브트리가 균형 잡혔는지 확인
        const balanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;
        const height = Math.max(leftHeight, rightHeight) + 1;
        
        return [balanced, height];
    }
    
    // 트리 전체의 균형 여부만 반환
    return checkBalanceAndHeight(root)[0];
};
