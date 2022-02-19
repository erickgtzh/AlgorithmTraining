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
var zigzagLevelOrder = function(root) {
    let result = [];
    let queue = [root];
    if(!root) return [];
    let flag = true;
    
    while(queue.length > 0) {
        let curLevel = [];
        let curSize = queue.length;
        for(let i = 0; i < curSize; i++) {
            let curNode = queue.shift();
            if(flag) curLevel.push(curNode.val);
            else     curLevel.unshift(curNode.val);
            if(curNode.left) queue.push(curNode.left)  
            if(curNode.right) queue.push(curNode.right)

        }
        result.push(curLevel);
        flag = !flag;
    }
    return result;
};
