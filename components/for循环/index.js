// for 循环
// author： ganxianjun

// method：continue， break，两者之间的区别
// for的语法：3个可以选择的表达式

// for(let i = 0; i < 9; i++) {
//     if (i > 4 && i < 8) {
//         break;
//     }
//     console.log('for break method num is: ' + i);
// }

// for(let i = 0; i < 9; i++) {
//     if (i > 4 && i < 8) {
//         continue;
//     }
//     console.log('for contine method num is: ' + i);
// }

// for in 遍历处理可以枚举的symbol属性；
const obj = {a: 1, b: 2};
function Color(name) {
    this.name = name;
}
Color.prototype = obj;

const colorObj = new Color('red');
// for in 遍历任意顺序迭代对象的可枚举属性。
// for(key in colorObj) {
//     if (colorObj.hasOwnProperty(key)) {
//         console.log('property ' + key + ' is value: ' + colorObj[key]);
//     }
//     console.log('enumer ' + key + ' is value: ' + colorObj[key]);
// }

// for of 遍历可迭代对象定义要迭代的数据。

const arr = [3, 5, 7];
for (key of arr) {
    console.log('for of: ' + key);
}

for (key in arr) {
    console.log('for in: ' + key);
}

