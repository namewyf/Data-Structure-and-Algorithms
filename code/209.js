/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0//不包括right
    let right = 0
    let sum = 0
    let min = nums.length + 1, num = 0//min可以定义为nums的长度，因为这个最小值不可能大于nums的长度
    while (left <= right && right <= nums.length) {//这里应该看left的值，因为当right出去后，left还有往右的可能，可以使得min最小
        if (sum < target) {
            sum += nums[right]
            right++
            num++
        } else {
            min = min < num ? min : num
            sum -= nums[left]
            left++
            num--
        }
    }
    console.log(min);
    return min > nums.length ? 0 : min
};
minSubArrayLen(7, [2, 3, 1, 2, 4, 1])