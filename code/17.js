<<<<<<< HEAD
function letterCombination(arr) {
    let result = []
    if (arr.length > 1) {
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                result.push(`${arr[0][i]}${arr[1][j]}`);
            }
        }
        arr.splice(0, 2, result);
        return letterCombination(arr);
    } else {
        return arr[0];
    }
}

export default function (digits) {
    let list = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];

    let arr = digits.split('').map(Number).map(a => list[a - 2]);
    if (arr.length === 0) {
        return []
    }
    return letterCombination(arr)
=======
function letterCombination(arr) {
    let result = []
    if (arr.length > 1) {
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                result.push(`${arr[0][i]}${arr[1][j]}`);
            }
        }
        arr.splice(0, 2, result);
        return letterCombination(arr);
    } else {
        return arr[0];
    }
}

export default function (digits) {
    let list = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];

    let arr = digits.split('').map(Number).map(a => list[a - 2]);
    if (arr.length === 0) {
        return []
    }
    return letterCombination(arr)
>>>>>>> 6c3f76a (hot100的提交)
}