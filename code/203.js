/**
 * Definition for singly-lincured list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var removeElements = function (head, val) {
    let newHead = new ListNode(0, head)
    let cur = newHead
    while (cur.next != null) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        }
        cur = cur.next
    }
    return newHead.next
};