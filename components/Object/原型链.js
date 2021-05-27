/*
 * author ganxianjun
 * 原型链探索
 * instanceof 构造函数的原型是否在对象的原型链上
*/

// 自定义一个函数
function Foo() {};
// 创建个foo实例
const foo = new Foo();
// 函数的原型
console.log('0', Foo.__proto__ === Function.prototype);
// 实例的原型，指向构造函数
console.log('1', foo.__proto__ === Foo.prototype);
// 函数Function的__proto__指向Function的prototype
console.log('2', Function.__proto__ == Function.prototype);
// 构造函数
console.log('3', Function.prototype.__proto__ === Object.prototype);

const fnFlag = Function instanceof Function;
console.log('4', fnFlag);
const objFlag = Object instanceof Object;
console.log('5', objFlag);
const fooFlag = Object instanceof Foo;
console.log('6', fooFlag);
console.log('7', Foo.prototype instanceof Object);

var simpleStr = "This is a simple string";
const strFlag = simpleStr instanceof String;
console.log('9', strFlag);
console.log('10', !foo instanceof Foo);

