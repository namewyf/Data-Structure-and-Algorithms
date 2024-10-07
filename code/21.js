/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

import Node from "./listNode/listNodeNoHead.js";
var mergeTwoLists = function (list1, list2) {
    let out = new Node.ListNode(-1)
    let top = out
    let top1 = list1
    let top2 = list2
    while (top1 != null && top2 != null) {
        let smaller
        if (top1.val <= top2.val) {
            smaller = top1
            top1 = top1.next
        } else {
            smaller = top2
            top2 = top2.next
        }
        top.next = smaller
        top = top.next
    }
    top.next = top1 === null ? top2 : top1

    return out.next
};
const list1 = Node.CreateList([2, 4, 6])
const list2 = Node.CreateList([1, 3, 5])
console.dir(mergeTwoLists(list1, list2));