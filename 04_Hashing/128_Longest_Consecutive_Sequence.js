// LeetCode 128 - Longest Consecutive Sequence
// Sample Input: [100,4,200,1,3,2]
// Sample Output: 4

// TODO: Implement solution here

// brute force approach

// var longestConsecutive = function (nums) {
//     let max=1;
//     for(let i=0;i<nums.length;i++){
//         let count=1;
//         let target=nums[i]
//        while(linearSearch(nums,target+1)){
//             count++;
//             target++;
//        }
//         max=Math.max(max,count)
//     }
//     return max
// };
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return true; // found
//     }
//   }
//   return false; // not found
// }


// Better solution
var longestConsecutive = function (nums) {
    let max=1;
    let lastMin=-Infinity;
    nums=nums.sort((a,b)=>a-b);
    let count=0;
    for(let i=0;i<nums.length;i++){
        
    }
}

let nums = [100, 4, 200, 1, 3, 2];
let inp2 =[0,3,7,2,5,8,4,6,0,1];
let inp3 =[1,0,1,2];
console.log(longestConsecutive(nums));
console.log(longestConsecutive(inp2));
console.log(longestConsecutive(inp3));

