// LeetCode 219 - Contains Duplicate II
// Sample Input: [1,2,3,1], k=3
// Sample Output: true

// TODO: Implement solution here

var containsNearbyDuplicate = function(nums, k) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            let val=map.get(nums[i]);
            let sub=i-val
            if(sub<=k){
                return true
            }
           
        }
            map.set(nums[i],i)
    }
    return false;
};

let inp1=[1,2,3,1];
let k1=3
let inp2=[99,99]
let k2=2
console.log(containsNearbyDuplicate(inp1,k1))
console.log(containsNearbyDuplicate(inp2,k2))