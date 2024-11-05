/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    //做题之前先考虑为什么要用哈希表，用在哪个地方，这样才不会写到一半，发现写错了
    let map = new Map()
    function cal(n) {
        let sum = 0
        while (n > 0) {
            sum += (n % 10) * (n % 10)
            n = Math.floor(n / 10)//这里是向下取整而不是四舍五入

        }
        return sum
    }
    while (true) {//这里不设置条件，直到有返回值为止
        let num = cal(n)
        if (num === 1) {
            return true
        } else if (map.has(num)) {
            return false
        } else {
            map.set(num, 1)
        }
        n = num
    }
};
isHappy(7)