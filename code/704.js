/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let right = nums.length - 1
    let left = 0
    let mid = Math.ceil((right + left) / 2)
    while (left <= right) {
        if (target > nums[mid]) {
            left = mid + 1
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            return mid
        }
        mid = Math.ceil((right + left) / 2)
    }
    return -1
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));