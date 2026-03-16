// LeetCode 844 - Backspace String Compare
// Sample Input: 'ab#c','ad#c'
// Sample Output: true

// TODO: Implement solution here


var backspaceCompare = function(s, t) {
    let res1=[]
    let res2=[]
    for(let i=0;i<s.length;i++){
        if(s[i]=="#"){
            res1.pop()
        }
        else{
            res1.push(s[i])
        }
    }
     for(let i=0;i<t.length;i++){
        if(t[i]=="#"){
            res2.pop()
        }
        else{
            res2.push(t[i])
        }
    }
    if(res1.length!=res2.length){
        return false
    }
    for(let i=0;i<res1.length;i++){
        if(res1[i]!=res2[i]){
            return false
        }
    }

    return true;
};

// let s = "ab#c"
// let t = "ad#c"
// let s = "ab##" 
// let t = "c#d#"
let s = "a#c" ,t = "b"
console.log(backspaceCompare(s,t))