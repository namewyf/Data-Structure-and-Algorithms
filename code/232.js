
var MyQueue = function () {
    this.stackIn = []
    this.stackOut = []//这里要有默认值为空数组，否则就是undefined
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stackOut.length === 0) {
        while (this.stackIn != []) {
            let tmp = this.stackIn.pop()
            this.stackOut.push(tmp)//记得一定要写this呀
        }
    }
    return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {

    const x = this.pop();//可以用其他函数直接封装
    this.stackOut.push(x);
    return x;
    // if(this.stackOut===[]){
    //     while(this.stackIn!=[]){
    //         let tmp = this.stackIn.pop()
    //         this.stackOut.push(tmp)
    //     }
    // }
    // return this.stackOut.peek()
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    if (this.stackOut === [] && this.stackIn === []) {
        return true
    } else {
        return false
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */