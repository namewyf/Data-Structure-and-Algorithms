// /**
//  * @param {number} n
//  * @return {number[][]}
//  */
// var generateMatrix = function (n) {
//     let arr = new Array(n).fill(new Array(n).fill(0))
//     let val = 1
//     let x = 0, y = 0
//     for (let i = 0; i < n; i++) {
//         arr[x][y] = val
//         y++
//         val++
//     }
//     y--
//     let len = n - 1
//     for (let j = n - 1; j > 0; j--) {
//         for (let k = 0; k < j; k++) {
//             x++
//             arr[]
//         }
//         for (let l = 0; l < j; l++) {

//         }
//     }
// };

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let arr = new Array(n); //表格有10行
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(n).fill(0); //每行有10列
    }
    let x = 0, y = 0;
    let val = 1
    function func(x, y, val, n) {
        if (n === 1) {
            arr[x][y] = val
        }
        for (let i = 0; i < n - 1; i++) {
            arr[x][y] = val//不能这样做，第一个值赋值的时候第一列所有的值都会被赋值
            y++
            val++
        }
        for (let j = 0; j < n - 1; j++) {
            arr[x][y] = val
            x++
            val++
        }
        for (let k = 0; k < n - 1; k++) {
            arr[x][y] = val
            y--
            val++
        }
        for (let l = 0; l < n - 1; l++) {
            arr[x][y] = val
            x--
            val++
        }
        if (n - 2 > 0) {

            func(x + 1, y + 1, val, n - 2)
        }
    }
    func(x, y, val, n)
    return arr
};
generateMatrix(3)