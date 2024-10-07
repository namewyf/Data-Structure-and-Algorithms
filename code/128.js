/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */
var longestConsecutive = function (nums) {
    var map = new Map()
    if (nums.length === 0) {
        return 0
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            continue
        }

        let qian = map.get(nums[i] - 1) || 0
        let hou = map.get(nums[i] + 1) || 0
        map.set(nums[i], qian + hou + 1)
        map.set(nums[i] - qian, qian + hou + 1)
        map.set(nums[i] + hou, qian + hou + 1)
    };

    return Math.max(...map.values());
}
export default longestConsecutive