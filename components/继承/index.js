// 原型链继承
function Father() {
    this.arr = [1, 2, 3, 4];
}

const man = new Father();
man.arr[4] = 5; 
console.log(man.arr);
const mans = new Father();
console.log(mans.arr);

function Man() {
}
Man.prototype = new Father();
const woman = new Man();
woman.arr[4] = 5;
console.log(woman.arr);
const woman2 = new Man();
console.log(woman2.arr);

// 借用构造函数继承

function Person(name) {
    this.name = name;
}
Person.prototype.eat = function() {
    console.log('人类吃饭');
}

function Woman(name) {
    Person.call(this, name);
}

const woman1 = new Woman('lili');
console.log(woman1);
