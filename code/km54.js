function func() {
    const readline = require('readline')
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    let str = ''
    rl.on('line', function (line) {
        str = line
        rl.close()
    })
    rl.on('close', function () {
        let out = str.split('').map((s) => {
            if (isNaN(Number(s))) {
                return s
            } else {
                return 'number'
            }
        })
        console.log(out.join(''));
    })
}
func()