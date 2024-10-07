/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 给你一个链表的头节点 head ，判断链表中是否有环。

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

// 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
// 
import Node from "./listNode/listNodeNoHead.js";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//这里是哈希表法
// var hasCycle = function (head) {
//     const map1 = new Map()
//     let top = head
//     while (top) {
//         if (map1.get(top)) {
//             return true
//         } else {
//             map1.set(top, 1)
//             top = top.next
//         }
//     }
//     return false
// };
//这里是快慢指针法

var hasCycle = function(head) {
    
    
};

let a = Node.CreateList([1])
a.next = a
console.log(hasCycle(a))
Node.PrintList(a)