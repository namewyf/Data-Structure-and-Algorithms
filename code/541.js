/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let len = s.length
    let yu = len % (2 * k)
    let left = 2 * k * (Math.floor(len / (2 * k)))
    if (yu < k) {
        let right = len - 1
    } else if (yu >= k && yu < (2 * k)) {
        let right = left + k - 1
    }
    while (left >= 0) {
        while (left <= right) {
            let tmp = s[right]
            s[right] = s[left]
            s[left] = tmp
            right--
            left++
        }
        left -= 2 * k
        right = left + k - 1
    }
};
reverseStr("abcdefg", 2)