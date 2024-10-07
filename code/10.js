<<<<<<< HEAD

var isMatch = function (s, p) {
    let modeArr = p.match(/([a-z.]\*)|([a-z]+(?=[a-z.]\*)|$)）/g)
    let cur = 0;
    console.log(typeof (modeArr));
    let strLen = s.length
    for (let i = 0, m; i < modeArr.length; i++) {
        //对于模式分为三类：.*|a*|defg
        m = modeArr[i].split('')
        //如果第二位是'*'说明是有模式的
        if (m[1] === '*') {
            if (m[0] === '.') {
                cur = strLen
                break
            } else {
                while (s[cur] === m[0]) {
                    cur++
                }
            }
        } else {
            for (let j = 0; j < m.length; j++) {
                if (m[j] !== s[cur]) {
                    return false
                } else {
                    cur++
                }
            }
        }
    }
    return cur === strLen
};
=======

var isMatch = function (s, p) {
    let modeArr = p.match(/([a-z.]\*)|([a-z]+(?=[a-z.]\*)|$)）/g)
    let cur = 0;
    let strLen = s.length
    for (let i = 0, m; i < modeArr.length; i++) {
        //对于模式分为三类：.*|a*|defg
        m = modeArr[i].split('')
        //如果第二位是'*'说明是有模式的
        if (m[1] === '*') {
            if (m[0] === '.') {
                cur = strLen
                break
            } else {
                while (s[cur] === m[0]) {
                    cur++
                }
            }
        } else {
            for (let j = 0; j < m.length; j++) {
                if (m[j] !== s[cur]) {
                    return false
                } else {
                    cur++
                }
            }
        }
    }
    return cur === strLen
};
>>>>>>> 6c3f76a (hot100的提交)
export default isMatch