/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Map()
    let num = 0
    let right = 0
    let left = 0
    while (s[right]) {
        if (map.has(s[right])) {
            while (left <= map.get(s[right])) {
                map.delete(s[left])
                left++
            }
            map.set(s[right], right)
        } else {
            map.set(s[right], right)
            if (map.size > num) {
                num = map.size
            }
        }
        right++
    }
    return num
};
console.log(lengthOfLongestSubstring("asdafkl"))