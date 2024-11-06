/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let n = nums1.length
    let map1 = new Map()
    let nums = 0
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            let sum = n1 + n2
            map1.set(sum, (map1.get(sum) || 0) + 1)
        }
    }
    for (const n3 of nums3) {
        for (const n4 of nums4) {//为什么要用const
            let sum = n3 + n4
            if (map1.has(-sum)) {
                nums++
            }
        }
    }
    return nums

};
fourSumCount([-1, 1], [-1, -1], [-1, 1], [1, -1])