export default function (str) {
    const counts = [];
    let tmp = 0;
    let sum = 0;
    while (tmp < str.length) {
        const c = str.charAt(tmp);
        let count = 0;
        while (str[tmp] === c) {
            count++;
            tmp++;
        }
        counts.push(count);
    }
    for (let i = 1; i < counts.length; i++) {
        sum += Math.min(counts[i - 1], counts[i])
    }
    return sum;
}