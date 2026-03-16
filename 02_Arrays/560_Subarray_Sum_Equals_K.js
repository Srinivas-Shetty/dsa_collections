// LeetCode 560 - Subarray Sum Equals K
// Sample Input: [1,1,1], k=2
// Sample Output: 2

// TODO: Implement solution here

var subarraySum = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum = sum += nums[j];
            console.log(sum, "pppppp")
            if (sum == k) {
                count++;
            }
        }
    }
    return count
};

var subarraySum = function (nums, k) {
    let count = 0;
    let prefixSum = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        let curSum = prefixSum - k;
        if (map.has(curSum)) {
            count += map.get(curSum);
        }
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return count
};
let nums = [1, -1, 0], k = 0;
console.log(subarraySum(nums, k))
