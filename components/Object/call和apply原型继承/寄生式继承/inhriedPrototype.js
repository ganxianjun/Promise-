
// 组合继承
function Food() {
    this.name = 'likes';
    console.log('999999');
};
Food.prototype.eat = function() {
    console.log('eat --- noole');
}

function Hobby() {
    Food.call(this);
}

Hobby.prototype = new Food();

const rice = new Hobby();

console.dir(rice);


// 原型式继承
// function Car(name) {
//     this.name = name;
//     console.log('444444');
// }
// Car.prototype.color = function() {
//     console.log('car color ---- red');
// }

// function Bicycle() {};
// const bicycle = new Car('自行车');
// function utils(obj) {
//     function F() {};
//     F.prototype = obj;
//     return new F();
// }
// const cars = utils(bicycle);
// Bicycle.prototype = cars;


