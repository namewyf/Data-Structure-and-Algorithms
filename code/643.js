/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let max //不能设置为0
    let sum = 0
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        if (right < k) {
            continue
        }
        sum -= nums[left]
        left++
        max = max > sum ? max : sum

    }
    return max / k || sum / k
};
findMaxAverage([9, 7, 3, 5, 6, 2, 0, 8, 1, 9], 6)