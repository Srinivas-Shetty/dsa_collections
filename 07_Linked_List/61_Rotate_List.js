// LeetCode 61 - Rotate List
// Sample Input: [1,2,3,4,5], k=2
// Sample Output: [4,5,1,2,3]

// TODO: Implement solution here

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

 var rotateRight = function(head, k) {
    if(head==null || head.next==null || k==0){
        return head;
    }
    let tail=head;
    let length=1;
    while(tail.next!=null){
        tail=tail.next;
        length++;
    }
    k=k%length;
    if(k==0){
        return head;
    }
    tail.next=head;
    let newTail=head;
    for(let i=0;i<length-k-1;i++){
        newTail=newTail.next;
    }
    let newHead=newTail.next;
    newTail.next=head;
    return newHead;
};
