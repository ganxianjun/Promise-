/*
 * author ganxianjun
 * any,race,all的使用
 * 2021.4.23
*/

var a = [1, 2];
var b = [Promise.reject('1'), 2];
var c = [2, Promise.reject('1')];

console.log(Promise.any);
// Promise.all(b)
// Promise.race(b)
Promise.any(b)
.then(value => {
    console.log('---', value);
})
.catch(reason => {
    console.log('+++', reason);
})
