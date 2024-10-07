//复原ip地址
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {

    var isIp = function (num) {
        return num <= 255 && num > 0
    }
    const segNum = 4
    const segments = new Array(segNum)
    var arr = []
    const dfs = function (s, segId, startIndex) {
        if (segId === segNum) {
            if (startIndex === s.length) {
                arr.push(segments.join('.'))
            }
            return
        }
        if (s.charAt(startIndex) === '0') {
            segments[segId] = 0
            dfs(s, segId + 1, startIndex + 1)
            return
        }
        if (segId < 4 && startIndex === s.length) {
            return
        }
        let a = 0;
        for (let endIndex = startIndex; endIndex < s.length; endIndex++) {
            a = 10 * a + (s.charAt(endIndex) - '0')
            if (isIp(a)) {
                segments[segId] = a

                dfs(s, segId + 1, endIndex + 1)
            } else {
                break
            }
        }
    }
    dfs(s, 0, 0)
    return arr
};

export default restoreIpAddresses