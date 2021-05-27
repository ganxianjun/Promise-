/*
 * author ganxianjun
 * 继承的实现
 * 
*/

// 对象就是靠继承，原型链依靠继承方式实现
function Foo(name) {this.name = name}
Foo.prototype.eat = function() {
    console.log('go go go');
}

function MyInhrit(name) {
    // 借用构造函数继承，（call, apply）可以传参
    Foo.call(this, name);
}
// 原型链继承(可以继承原型，调用了父类的构造函数，造成了资源的浪费)
// MyInhrit.prototype = new Foo();
// 父级的原型赋值(父级原型的constructor的指向也会改变， 父子构造函数的原型属性共享)
// MyInhrit.prototype = Foo.prototype;
// 寄生式继承(好处：Foo的指向没有改变，同时解决了资源浪费 的问题)
MyInhrit.prototype = Object.create(Foo.prototype);
// 注意：设置原型， 要修改原型的指向
MyInhrit.prototype.constructor = MyInhrit;

const myInhrit = new MyInhrit('world');
// 注意执行的顺序
// console.log('---', myInhrit, myInhrit.eat());

// 原型上的constructor，指向构造函数的引用
console.log('+++', MyInhrit.prototype.constructor.name, Foo.prototype.constructor.name);
