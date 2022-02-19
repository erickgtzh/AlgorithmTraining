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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    let queue = [root];
    if(!root) return [];
    while(queue.length > 0) {
        let curLevel = []; 
        let sizeLevel = queue.length; 
        for(let i = 0; i < sizeLevel; i++) {
            let curNode = queue.shift();
            curLevel.push(curNode.val);
            if(curNode.left) queue.push(curNode.left);
            if(curNode.right) queue.push(curNode.right);   
        }
        result.push(curLevel);
    }
    return result;
};
