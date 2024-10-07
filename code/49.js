/**
 * @param {string[]} strs
 * @return {string[][]}
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 */
var groupAnagrams = function (strs) {
    const map = new Map()
    for (let item of strs) {
        let yiwei = item.split('').sort().join('')
        if (map.has(yiwei)) {
            map.get(yiwei).push(item)
        } else {
            map.set(yiwei, [item])
        }
    }
    let arr = []
    function showElements(value) {
        arr.push(value)
    }
    map.forEach(showElements)
    return arr
};

export default groupAnagrams