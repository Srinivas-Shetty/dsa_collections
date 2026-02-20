// LeetCode 217 - Contains Duplicate
// Sample Input: [1,2,3,1]
// Sample Output: true

// TODO: Implement solution here

var containsDuplicate = function(nums) {
    let map=new Map();
    for(let num of nums){
        if(map.has(num)){
            return true
        }
        else{
            map.set(num,1)
        }
    }
    return false
};
let inp1=[1,2,3,1]
console.log(containsDuplicate(inp1))