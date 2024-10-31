/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let right = nums.length - 1
    let left = 0
    let center = Math.ceil((right + left) / 2)
    while (nums[center] != target && right != left) {
        if (nums[center] < target) {
            left = center
        } else {
            right = center
        }
        center = Math.ceil((right + left) / 2)
    }
    if (right === left) {
        return -1
    } else {
        return center
    }
};
console.log(search([-1, 0, 3, 5, 9, 12], 2));