var repeatedSubstringPattern = function (s) {
    var reg = /^(\w+)\1+$/
    return reg.test(s)
};
export default repeatedSubstringPattern