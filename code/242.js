/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let map = new Map()//也可以26个字母作为哈希表，而不是以s作为哈希表
    if (s.length != t.length) {
        return false
    }
    for (let i = 0; i < t.length; i++) {
        if (map.has(s[i])) {
            let tmp = map.get(s[i])
            map.set(s[i], ++tmp)
        } else {
            map.set(s[i], 1)
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (map.has(t[j])) {
            let tmp = map.get(t[j])
            tmp === 1 ? map.delete(t[j]) : map.set(s[j], --tmp)
        } else {
            return false
        }
    }
    return true
};
isAnagram("aacc", "ccac")