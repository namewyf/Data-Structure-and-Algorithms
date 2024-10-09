/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

import Node from "./listNode/listNodeNoHead.js";
var addTwoNumbers = function (l1, l2) {
    function add(l1, l2, left) {
        let a, b
        if (l1 === null && l2 != null) {
            a = 0
            b = l2.val
            let singleSum = new Node.ListNode(0)
            singleSum.val += (a + b + left) % 10
            let tmp = add(l1, l2.next, Math.floor((a + b + left) / 10))
            singleSum.next = tmp
            return singleSum
        } else if (l2 === null && l1 != null) {
            b = 0
            a = l1.val
            let singleSum = new Node.ListNode(0)
            singleSum.val += (a + b + left) % 10
            let tmp = add(l1.next, l2, Math.floor((a + b + left) / 10))
            singleSum.next = tmp
            return singleSum
        } else if (l1 === null && l2 === null) {
            return left ? new Node.ListNode(left) : null
        } else {
            a = l1.val
            b = l2.val
            let singleSum = new Node.ListNode(0)
            singleSum.val += (a + b + left) % 10
            let tmp = add(l1.next, l2.next, Math.floor((a + b + left) / 10))
            singleSum.next = tmp
            return singleSum
        }

    }
    return add(l1, l2, 0)
};
let l1 = Node.CreateList([1, 2, 3])
let l2 = Node.CreateList([1, 3, 2])
Node.PrintList(addTwoNumbers(l1, l2))
console.log(addTwoNumbers(l1, l2));