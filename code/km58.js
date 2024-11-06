function prefixSum() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let inputLines = [];
    rl.on('line', (line) => {
        inputLines.push(line.trim());
    });

    rl.on('close', () => {
        // 读取项数 n
        const n = parseInt(inputLines[0]);

        // 使用前缀和，复杂度控制在 O(1)
        let sum = new Array(n);
        sum[0] = parseInt(inputLines[1]);

        // 计算前缀和数组
        for (let i = 1; i < n; i++) {
            let value = parseInt(inputLines[i + 1]);
            sum[i] = sum[i - 1] + value;
        }

        // 处理区间和查询
        for (let i = n + 1; i < inputLines.length; i++) {
            let [left, right] = inputLines[i].split(' ').map(Number);

            if (left === 0) {
                console.log(sum[right]);
            } else {
                console.log(sum[right] - sum[left - 1]);
            }
        }
    });
}
prefixSum()