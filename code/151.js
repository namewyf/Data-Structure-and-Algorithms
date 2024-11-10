/**
 * @param {string} s
 * @return {string}
 */
var reverseWord = function (arr, s, e) {
    let i = s, j = e
    for (; i <= j; i++, j--) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
    return arr
}
var removeChar = function (arr) {
    let i = 0, j = arr.length - 1
    let tmp = 0
    while (arr[i] === " ") {
        i++
    }
    while (arr[j] === " ") {
        j--
    }
    for (let m = i; m <= j; m++) {
        arr[tmp] = arr[m]
        tmp++
    }
    arr.length = j - i + 1
    return arr//函数参数是按值传递的，但是对于对象（包括数组）来说，这个“值”实际上是对对象的引用。这意味着如果你在函数内部修改了传入的对象或数组的内容，这些修改会反映到函数外部。然而，如果你尝试重新赋值这个参数变量本身（在函数内部给它一个新的对象或数组），这个改变不会影响到函数外部的原始变量。
}
var reverseWords = function (s) {
    let arr = s.split('')
    removeChar(arr)
    let a = 1
    let start = 0, end
    while (a < arr.length) {
        if ((arr[a] === " " && arr[a - 1] != " ") || a === arr.length - 1) {
            if (a === arr.length - 1) {
                end = a
            } else {
                end = a - 1
            }
            reverseWord(arr, start, end)
        }
        if (arr[a] != " " && arr[a - 1] === " ") {
            start = a
            if ((end + 2) != start) {
                let t = end + 2
                while (arr[t] === " ") {
                    arr[t] = ''
                    t++
                }
            }
        }
        a++
    }
    reverseWord(arr, 0, arr.length - 1)
    return arr.join('')
};
reverseWords("F R  I   E    N     D      S      ")