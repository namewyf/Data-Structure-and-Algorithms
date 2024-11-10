function func() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    let inputLines = []
    rl.on('line', function (line) {
        inputLines.push(line.trim())
    })

    rl.on('close', function () {
        let [n, m] = inputLines[0].split(" ").map(Array)
        let c = new Array(n).fill(0)//列
        let r = new Array(m).fill(0)//行
        let arr = new Array(n)
        for (let s = 0; s < n; s++) {
            arr[s] = inputLines[s + 1].split(" ").map(Array)
        }
        console.log(arr);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                c[i] += arr[i][j]
            }
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                r[j] += arr[i][j]
            }
        }
        console.log(c, r);
    })
}
func()