// LeetCode 283 - Move Zeroes
// Sample Input: [0,1,0,3,12]
// Sample Output: [1,3,12,0,0]

// TODO: Implement solution here

function moveZeroes(nums){
    let left=0;
    for(let right=0;right<nums.length;right++){
        if(nums[right]!=0){
            let temp=nums[right];
            nums[right]=nums[left];
            nums[left]=temp;
        }
        if(nums[left]!=0){
            left++;
        }
    }
    return nums;
}

let nums=[0,1,0,3,12]
console.log(moveZeroes(nums))

