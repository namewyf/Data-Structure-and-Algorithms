/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort(function (a, b) {//升序
        return a - b
    }
    )

    let out = []
    for (let i = 0; i < nums.length - 2;) {
        let left = i + 1;
        let right = nums.length - 1
        while (right > left) {
            let sum = nums[left] + nums[right] + nums[i]
            if (sum > 0) {
                while (nums[right] === nums[--right]) { }
            }
            if (sum < 0) {
                while (nums[left] === nums[++left]) { }
            }
            if (sum === 0) {
                out.push([nums[i], nums[right], nums[left]])

                while (nums[left] === nums[++left]) { }

                while (nums[right] === nums[--right]) { }
            }
        }
        while (nums[i] === nums[++i]) { }
    }
    console.log(out);
    return out
};

threeSum([-1, 0, 1, 2, -1, -4])