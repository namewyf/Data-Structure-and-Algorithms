/**
 * @param {number[]} height
 * @return {number}
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。
 */
var maxArea = function (height) {
    let max = 0
    let mianji = 0
    for (let right = height.length - 1, left = 0; right > left;) {

        if (height[right] >= height[left]) {
            mianji = height[left] * (right - left)
            left++
        } else {
            mianji = height[right] * (right - left)
            right--
        }
        max = max > mianji ? max : mianji

    }
    return max
};
export default maxArea