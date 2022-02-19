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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if(!root) return [];
    
    let path = [];
    
    const dfs = (cur, sum, curPath) => {
        if(cur.left === null && cur.right === null) {
            if(sum === cur.val) {
                curPath.push(cur.val)
                path.push(curPath.slice())
                curPath.pop();
            }
        }
        if(cur.left) {
            curPath.push(cur.val);
            dfs(cur.left, sum - cur.val, curPath);
            curPath.pop();
        }
        if(cur.right) {
            curPath.push(cur.val);
            dfs(cur.right, sum - cur.val, curPath);
            curPath.pop();
        }
    }
    
    dfs(root, targetSum, [])
    return path;
};
