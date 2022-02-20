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
 * @return {number}
 */
var sumNumbers = function(root) {
    let res = 0
    const traverse = (node, path) => {
        if(!node) return;
        
        path += node.val.toString();
        
        if(node.left === null && node.right === null) {
            res += Number(path);
            return;
        } 
        
        if(node.left){
            traverse(node.left, path)
        }
        if(node.right){
            traverse(node.right, path);
        }  
    } 

    traverse(root, "")
    return res;
};
