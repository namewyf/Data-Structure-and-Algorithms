import { ListNode } from "./listNode/listNodeNoHead";

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};
/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (head === null) {
        return null
    }
    let p = head.next
    let newHead = new _Node(head.val, null)
    let q = newHead
    let map = new Map()
    map.set(head, newHead)
    while (p) {
        let newNode = new _Node(p.val, null)
        q.next = newNode
        q = q.next
        map.set(p, newNode)
        p = p.next
    }
    q = newHead
    while (head) {
        q.random = map.get(head.random)
        head = head.next
        q = q.next
    }
    return newHead
};