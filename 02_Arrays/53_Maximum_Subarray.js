// LeetCode 53 - Maximum Subarray
// Sample Input: [-2,1,-3,4,-1,2,1,-5,4]
// Sample Output: 6

// TODO: Implement solution here

// var maxSubArray = function(nums) {
//     let max=-Infinity;
//     for(let i=0;i<nums.length;i++){
//         let sum=0;
//         for(let j=i;j<nums.length;j++){
//             sum+=nums[j];
//             max=Math.max(sum,max);
//         }
//     }
//     return max;
// };


var maxSubArray = function(nums) {
    let max=-Infinity;
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        max=Math.max(sum,max);
        if(sum<0){
            sum=0;
        }
    }
    return max;
};

// let nums=[-2,1,-3,4,-1,2,1,-5,4]
let nums=[5,4,-1,7,8]
console.log(maxSubArray(nums))


