/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
import { ListNode, CreateList, PrintList } from "./listNode/listNodeNoHead.js"

var removeNthFromEnd = function (head, n) {
    let newHead = new ListNode()
    newHead.next = head
    var i = n
    function func(head, n) {
        if (head === null) {
            return
        } else {
            func(head.next, n)
            i--
        }
        if (i === -1) {
            head.next = head.next.next
        }
        return head

    }
    return func(newHead, n).next
};
let a = CreateList([1, 2, 3, 4, 5])
PrintList(removeNthFromEnd(a, 2))
