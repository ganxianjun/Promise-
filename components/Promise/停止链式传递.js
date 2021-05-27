/*
 * author ganxianjun
 * 链式传递的探索（暂停）
 * 2021.4.23
*/

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello world');
    }, 3000);
});

p.then(value => {
    console.log('1', value);
    // 抛出错误
    // throw new Error('error');
    // 返回一个Promise实例
    // return Promise.resolve('我成功了！');
    // 停止向下传递（promise的状态是pending状态, 不传回调函数会报错（Promise resolver undefined is not a function）
    return new Promise(() => {});
})
.then(value => {
    console.log('3', value);
})
.catch(reason => {
    console.log('2', reason);
})

