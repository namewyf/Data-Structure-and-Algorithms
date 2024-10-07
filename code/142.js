// /**这是哈希表法
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// import Node from "./listNode/listNodeNoHead.js";
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var detectCycle = function (head) {
//     const map1 = new Map();
//     let top = head
//     let num = -1
//     while (top) {
//         if (map1.has(top)) {
//             return top
//         } else {
//             num++
//             map1.set(top, num)
//             top = top.next
//         }
//     }
//     return null
// };
// const a = Node.CreateList([1, 2])
// a.next.next = a
// console.log(detectCycle(a));

//这里是快慢指针法,还没写完，不过我已经懂了大概的逻辑，假设不循环的部分是a，循环的部分
//是b，那么相遇时慢指针走过的长度是a+b-a%b,这时候再加一个慢指针，一个从head开始，一个从
//a+b-a%b开始，当他们相遇时，所在的就是a和b的分界点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
import Node from "./listNode/listNodeNoHead.js";
var detectCycle = function (head) {
    let firstMeet = 0
    let b = 0
    let right = head
    let left = head
    do {
        right = right.next.next
        left = left.next
        firstMeet++
    } while (left != right && right.next != null)

    if (right === left) {
        let circleIndex = right
        do {
            circleIndex = circleIndex.next
            b++
        } while (circleIndex != right)

        return left
    } else if (right.next === null) {
        return null
    }
};

const a = Node.CreateList([1, 2])
a.next.next = a
console.log(detectCycle(a));