// LeetCode 14 - Longest Common Prefix
// Sample Input: ['flower','flow','flight']
// Sample Output: 'fl'

// TODO: Implement solution here

var longestCommonPrefix = function(strs) {
    let res="";
    let minStrLength=Infinity;
    for(let i=0;i<strs.length;i++){
       let len=strs[i].length;
       minStrLength=Math.min(len,minStrLength)
    }
    let count=0;
    for(let i=0;i<minStrLength;i++){
        let char;
        for(let i=0;i<strs.length;i++){
           if(!char){
            char=strs[i][count]
           }
           else{
                if(char!=strs[i][count]){
                    return res;
                }
           }
        }
        res+=char;
        count++
    }
      return res;
};

// let strs = ["flower","flow","flight"];
let strs = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs))
