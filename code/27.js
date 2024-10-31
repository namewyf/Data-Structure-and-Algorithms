// /**暴力法
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val) {
//     let tmp = []
//     let num = 0
//     for(let i = 0;i<nums.length;i++){
//         if(nums[i]!=val){
//             tmp.push(nums[i])
//             num++
//         }
//     }
//     for(let j = 0;j<tmp.length;j++){
//         nums[j] = tmp[j]
//     }
//     return num
// };



/**双指针法
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[j] = nums[i]
            j++
        }

    }
    return j
};