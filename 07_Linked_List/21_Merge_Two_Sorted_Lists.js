// LeetCode 21 - Merge Two Sorted Lists
// Sample Input: [1,2,4],[1,3,4,5,6]
// Sample Output: merged

// TODO: Implement solution here

// testing updated by srinivas


function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    while (list1 !== null && list2 != null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list2.next;
        }
        current=current.next;
    }
    if (list1 != null) {
        current.next = list1;
    }
    else {
        current.next = list2;
    }

    return dummy.next;

};
let list1 = [1, 2, 4]
let list2 = [1, 3, 4, 5, 6]
console.log(mergeTwoLists(list1, list2))

