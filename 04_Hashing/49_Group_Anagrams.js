// LeetCode 49 - Group Anagrams
// Sample Input: ['eat','tea','tan','ate','nat','bat']
// Sample Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// TODO: Implement solution here

let groupAnagrams = function(strs) {
    let res=[]
    let index=0;
    let map=new Map();
    for(let i=0;i<strs.length;i++){
        let word=strs[i].split("").sort().join("")
        if(map.has(word)){
            res[map.get(word)].push(strs[i])
        }
        else{
            map.set(word,index++)
            res.push([strs[i]])
        }
    }

    return res
};
 let inp1=['eat','tea','tan','ate','nat','bat']
 console.log(groupAnagrams(inp1))