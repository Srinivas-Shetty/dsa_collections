// LeetCode 189 - Rotate Array
// Sample Input: [1,2,3,4,5,6,7], k=3
// Sample Output: rotated

// TODO: Implement solution here

function reverse(nums,left,right){
    while(left<right){
        let temp=nums[left]
        nums[left]=nums[right]
        nums[right]=temp
        left++;
        right--;
    }
}

var rotate = function(nums, k) {
    let n=nums.length;
    k=k%n;
    reverse(nums,0,n-1)
    reverse(nums,0,k-1);
    reverse(nums,k,n-1);
    return nums
};


let nums = [1,2,3,4,5,6,7]
let k = 3
console.log(rotate(nums,k))