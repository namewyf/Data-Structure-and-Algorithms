/**这是递归法解决的
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let out = []
    function func(root) {
        if (root === null) {
            return null
        }
        if (root.left) {
            func(root.left)
        }
        out.push(root.val)
        if (root.right) {
            func(root.right)
        }
    }
    func(root)
    return out
};