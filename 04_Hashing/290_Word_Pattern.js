// LeetCode 290 - Word Pattern
// Sample Input: 'abba','dog cat cat dog'
// Sample Output: true

// TODO: Implement solution here

var wordPattern = function(pattern, s) {
    let map=new Map();
    arr=s.split(" ");
    if(arr.length!=pattern.length){
        return false
    }
    if(new Set(pattern.split("")).size!=new Set(s.split(" ")).size){
        return false
    }
    for(let i=0;i<pattern.length;i++){
        if(map.has(pattern[i])){
            if(map.get(pattern[i])!=arr[i]){
                return false;
            }
        }
        else{
            map.set(pattern[i],arr[i])
        }
    }
    return true
};

let pattern='abba';
let s='dog dog dog dog'

console.log(wordPattern(pattern,s));

