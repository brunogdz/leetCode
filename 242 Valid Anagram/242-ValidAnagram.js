/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let s_l = s.length;
    let t_l = t.length;
    if(s_l != t_l){
        return false;
    }
    for(let i = 0; i < s.length ; i++){
        for (let j = 0; j < t.length ; j++){
            

                if(s[i] == t[j]){
                    console.log("letra s ->" + s[i] + " letra t-> " + t[j])
                    t = t.substring(0, j) + t.substring(j+1)
                    console.log(t)
                    break
                }
            
        }
    }

    if(t.length == 0){
        return true
    }else{
        return false;
    }

};

// s = "anagram", t = "nagaram"
s = "rat", t = "car"
console.log(isAnagram(s,t))
// for(let i = 0; i < s.length; i ++){
//     console.log(s[i])
// }