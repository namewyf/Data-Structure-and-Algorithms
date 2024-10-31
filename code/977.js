/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let newArr = []
    let left = 0, right = nums.length - 1
    let max
    while (left <= right) {
        let left2 = nums[left] * nums[left]
        let right2 = nums[right] * nums[right]
        if (left2 < right2) {
            max = right2
            right--
        } else {
            max = left2
            left++
        }
        newArr.unshift(max)
    }

    return newArr
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));