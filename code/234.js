/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

import { CreateList, PrintList, reverseList, ListNode } from './listNode/listNodeNoHead.js'
//快慢指针解法
// var isPalindrome = function (head) {
//     if (head.next === null) {
//         return true
//     }
//     let r = head
//     let endOfFirst = head
//     while (r.next != null && r.next.next != null) {
//         r = r.next.next
//         endOfFirst = endOfFirst.next
//     }
//     let test1 = reverseList(endOfFirst)
//     let test2 = head
//     while (test1 != null) {
//         if (test1.val != test2.val) {
//             return false
//         }
//         test1 = test1.next
//         test2 = test2.next
//     }
//     return true

// };



// // 递归解法
// var isPalindrome = function (head) {
//     if (head === null || head.next === null) {
//         return true
//     }
//     let lastTwo = head
//     while (lastTwo.next.next != null) {
//         lastTwo = lastTwo.next
//     }
//     let out1 = lastTwo.next.val === head.val
//     head = head.next
//     lastTwo.next = null
//     let out2 = isPalindrome(head)
//     return out1 && out2
// };
// //这里每一次递归都要一次循环，因此时间复杂度是O(n^2)，耗时太长
// let a = CreateList([1, 1, 3, 2, 1])
// console.log(isPalindrome(a));
// PrintList(a)

var isPalindrome = function (head) {
    
};