/*
 * author ganxianjun
 * Promise的finally的实现
 * 2021.4.23
*/

var p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功了');
        // reject('失败了');
    }, 2000);
});
// 自定义
Promise.prototype.F = function(cb) {
    const p = this.constructor;
    // 注意，返回一个Promise
    return this.then(
        value => p.resolve(cb()).then(() => value),
        reason => p.resolve(cb()).then(() => reason)
    );
};
p
.then(value => {
    console.log('333', value);
    throw new Error('错了');
    return 'finally';
    // return new Promise(() => {});
})
.then(value => {
    console.log('666', value);
    return '----';
})
// .finally(() => {
//     console.log('finally');
// })
.F(() => {
    console.log('自定义执行了');
    return new Promise((r, d) => {
        r('=====');
    })
})
.then(value => {
    console.log('888', value);
})
