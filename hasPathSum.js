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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    let hasPath = false;
    const dfs = (cur, sum) => {
        if(cur.left === null && cur.right === null) {
            if(sum === cur.val) {
                hasPath = true;    
            }
            
            return;
        }
        if(cur.left) dfs(cur.left, sum - cur.val);
        if(cur.right) dfs(cur.right, sum - cur.val);
    }
    
    dfs(root, targetSum);
    
    return hasPath;
};
