// 缺点：原型上的属性和方法无法继承；
function Person(name) {
    this.name = name;
}
function Age(age) {
    this.age = age;
}
Person.prototype.eat = function() {
    console.log('like eat milk');
}
Person.prototype.name = 'tom';

function Man(name, age) {
    Person.call(this, name);
    Age.call(this, age);
}

const man = new Man('lili', 23);

function Animal() {
}
Animal.prototype = new Person();

Object.defineProperty(Animal.prototype, 'constructor', {
    value: '---',
    enumerable: true
})

const cat = new Animal();
for (let key in cat) {
    console.log(key);
}

