/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 */
var moveZeroes = function (nums) {
    let slowIndex = 0
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] != 0) {
            [nums[fastIndex], nums[slowIndex]] = [nums[slowIndex], nums[fastIndex]]
            slowIndex++
        }
    }
    return nums
};
export default moveZeroes