
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function CreateList(arr) {
    let head = new ListNode()
    head.val = arr[0]
    let top = head
    for (let i = 1; i < arr.length; i++) {
        let newNode = new ListNode(arr[i])
        top.next = newNode
        top = newNode
    }
    return head
}

function PrintList(head) {
    let a = head
    while (a != null) {
        console.log(a.val);
        a = a.next;
    }
}

var reverseList = function (head) {
    let top = head
    let newList = null
    while (top != null) {
        let newNode = new ListNode()
        newNode.val = top.val
        newNode.next = newList
        newList = newNode
        top = top.next
    }
    return newList;
};

export {
    PrintList,
    CreateList,
    ListNode,
    reverseList
}
