// LeetCode 242 - Valid Anagram
// Sample Input: 'rat','car'
// Sample Output: false

// TODO: Implement solution here

var isAnagram = function(s, t) {
    if(s.length==0 && t.length==0){
        return true
    }
    if(s.length!=t.length){
        return false
    }
    let map=new Map;
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],(map.get(s[i] || 0)+1));
        }
        else{
            map.set(s[i],1)
        }
        if(map.has(t[i])){
            map.set(t[i],(map.get(t[i])-1));
        }
        else{
            map.set(t[i],-1)
        }
    }
    for(let [key,val] of map){
        if(val!=0){
            return false
        }
    }
    return true;
};
let s="rat"
let t="car"
console.log(isAnagram(s,t))