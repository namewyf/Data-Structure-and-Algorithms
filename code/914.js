<<<<<<< HEAD
var hasGroupsSizeX = function (deck) {

    let counts = []
    let tmp
    let m = 0
    for (let i = 0; i < deck.length - 1; i++) {
        for (let j = 0; j < deck.length - i - 1; j++) {
            if (deck[j] > deck[j + 1]) {
                tmp = deck[j]
                deck[j] = deck[j + 1]
                deck[j + 1] = tmp
            }
        }
    }
    while (m < deck.length) {
        let count = 0;
        let firstVal = deck[m]
        do {
            count++
            m++
        } while (m < deck.length && firstVal === deck[m])
        counts.push(count)
    }
    if (Math.max(...counts) < 2) {
        return false
    } else {
        for (let x = 2; x <= Math.max(...counts); x++) {
            let k = 0
            while (counts[k] % x === 0) {
                k++
            }
            if (k === counts.length) {
                return true
            }
        }
        return false
    }
};
=======
var hasGroupsSizeX = function (deck) {

    let counts = []
    let tmp
    let m = 0
    for (let i = 0; i < deck.length - 1; i++) {
        for (let j = 0; j < deck.length - i - 1; j++) {
            if (deck[j] > deck[j + 1]) {
                tmp = deck[j]
                deck[j] = deck[j + 1]
                deck[j + 1] = tmp
            }
        }
    }
    while (m < deck.length) {
        let count = 0;
        let firstVal = deck[m]
        do {
            count++
            m++
        } while (m < deck.length && firstVal === deck[m])
        counts.push(count)
    }
    if (Math.max(...counts) < 2) {
        return false
    } else {
        for (let x = 2; x <= Math.max(...counts); x++) {
            let k = 0
            while (counts[k] % x === 0) {
                k++
            }
            if (k === counts.length) {
                return true
            }
        }
        return false
    }
};
>>>>>>> 6c3f76a (hot100的提交)
export default hasGroupsSizeX