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
 * @return {number[]}
 */

let getAverage = (curLevel) => {
    let sum = 0;
    for(let i = 0; i < curLevel.length; i++){
        sum += curLevel[i];
    }
    return sum/curLevel.length;
}
        
var averageOfLevels = function(root) {
    let result = [];
    let queue = [root];
    
    while(queue.length > 0) {
        let curLevel = [];
        let curSize = queue.length;
        for(let i = 0; i < curSize; i++) {
            let curNode = queue.shift();
            curLevel.push(curNode.val)
            if(curNode.left) queue.push(curNode.left);
            if(curNode.right) queue.push(curNode.right);
        }
        result.push(getAverage(curLevel));
    }
    return result;
};
