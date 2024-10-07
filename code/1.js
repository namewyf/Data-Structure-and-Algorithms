/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const idx = new Map()
    for (let i = 0; i < nums.length; i++) {
        let tmp = target - nums[i]
        if (idx.has(tmp)) {
            return [idx.get(tmp), i]
        }
        idx.set(nums[i], i)

    }
};

export default twoSum;