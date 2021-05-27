/*
 * author ganxianjun
 * 数据处理
 * 2021.4.23
*/

var a = '';
var b = null;
var c = '12px';
// 空字符串
// console.log(parseInt(a)); // NaN 
// console.log(parseFloat(a)); // NaN
// console.log(Number(a)); // 0
// console.log(isNaN(a)); // false, 先转成数字，再判断

// null
// console.log(parseInt(b)); // NaN 
// console.log(parseFloat(b)); // NaN
// console.log(Number(b)); // 0
// console.log(isNaN(b)); // false, 先转成数字0，再判断

// 12px
// console.log(parseInt(c)); // 12
// console.log(parseFloat(c)); // 12
// console.log(Number(c)); // NaN
// console.log(isNaN(c)); // true, 先转成数字，再判断

// console.log(parseFloat('1.2px') + parseInt('1.6px') + typeof parseInt(null)); // 2.2number

// console.log(isNaN(Number(!!Number(parseInt('0.8'))))); // false

// console.log(typeof !parseInt(null) + !isNaN(null)) // booleantrue

console.log(10 + false + undefined + [] + 'Tencent' + null + true + {}); // NaNTencentnulltrue[object Object]