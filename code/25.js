// /**这是错解，脑子晕了，没有使用递归
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  */
// import { CreateList, ListNode, PrintList } from "./listNode/listNodeNoHead.js";
// var reverseKGroup = function (head, k) {
//     let i = 1
//     let key1
//     let key2
//     let key3
//     let key4
//     let tmp = 0
//     let start
//     let newNode = new ListNode(-1, head)
//     head = newNode
//     function func1(head, k) {
//         if (head.next != null) {
//             i++
//             func1(head.next, k)
//             i--
//             if (i % k === 0) {
//                 if (i === k) {
//                     start = head
//                 } else {
//                     key1 = head.next
//                 }
//             }
//             if (i % k === 1) {
//                 if (key1 === undefined) {
//                     key1 = head.next
//                 } else {
//                     key3 = head.next
//                 }
//             }
//             // if (key1) {
//             //     console.log("key1", key1.val);
//             // }
//             // if (key3) {
//             //     console.log("key3", key3.val);
//             // }
//             // console.log("i", i);
//             if (key1) {
//                 head.next.next = head
//                 // console.log(key1.val, key3.val, i);
//             }
//             if (key1 && key3) {
//                 console.log(key1.val, key3.val, i);
//             }
//         } else {
//             return null
//         }
//     }
//     func1(head, k)
//     return start
// };
// let a = CreateList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
// reverseKGroup(a, 3)




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import { CreateList, ListNode, PrintList } from "./listNode/listNodeNoHead.js";
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function (head, k) {
    function reverse(left, right) {
        let newleft = left.next
        let head = left.next
        let p = head
        left.next = right
        let tmp = right.next
        while (tmp != right) {
            let front = p.next
            p.next = tmp
            tmp = p
            p = front
        }
        return newleft
    }
    let newNode = new ListNode()
    newNode.next = head
    head = newNode
    while (head) {
        let left = head
        for (let i = 0; i < k; i++) {
            head = head.next
            if (head === null) {
                return newNode.next
            }
        }
        let right = head
        head = reverse(left, right)
    }
    return newNode.next
};
let a = CreateList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
PrintList(reverseKGroup(a, 3))
// PrintList(reverse(a, a.next.next.next.next.next))