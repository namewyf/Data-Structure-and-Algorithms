/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // let right = 1;
    // let left = 0;
    for (let i = 0; i < nums.length; i++) {
        let d2 = nums[i] * nums[i]
        nums[i] = d2
    }
    return nums
};