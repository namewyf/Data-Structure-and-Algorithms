/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

  let A = headA;
  let B = headB;
  if (A === null || B === null) {
    return null;
  }

  //非原始数据类型是通过引用来比较的，因此可以直接比较
  while (A != B) {
    //这里很妙，假如说headA = a+c,headB = b+c,其中a,b分别是a,b链表的
    //不相交部分，而c是相交部分，那么如果A移动a+c+b下，而B移动b+c+a
    //下，那么就会直接相交
    A = A === null ? headB : A.next;
    B = B === null ? headA : B.next;
  }
  if (A === B) {
    return A
  } else {
    return null
  }
};