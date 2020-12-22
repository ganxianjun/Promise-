// 对象的set和get的使用
const obj = {
    data: {name: 'tom'},
    list: [
        {price: 10, name: 'script'},
        {price: 2, name: 'math'}
    ],
    set age(value) {
        if (typeof value !== 'number' || value > 100 || value < 10) {
            throw new Error('设置的值是10-100之间的数字');
        }
        console.log('9999', value);
        this.data.age = value;
    },
    get age() {
        return this.data.age;
    },
    get price() {
        return this.list.reduce((preVal, nextVal) => {
            const {price} = nextVal;
            return preVal + price;
        }, 0);
    }
}

obj.age = 100;
let obj2 = {};

Object.defineProperty(obj2, 'name', {
    configurable: true,
    enumerable: true,
    get() {
        return '0000';
    },
    set(value) {
        return value;
    }
});

class User {
    constructor() {
        this.list = [
            {price: 10, name: 'script'},
            {price: 2, name: 'math'}
        ];
    }
    price() {
        return this.list.reduce((preVal, nextVal) => {
            const {price} = nextVal;
            return preVal + price;
        }, 0);
    }
}

const user = new User();

const datas = Symbol();
class Person {
    constructor(name, value) {
        this[datas] = {name, value};
        this.age = value;
    }
    set name(val) {
        console.log('<<<<');
        this[datas].name = val;
    }

    get name() {
        return this[datas].name;
    }
    // 不能这样写的原因是age是实例上的一个属性，陷入一个无限循环中
    // set age(val) {
    //     this.age = val;
    // }
    // get age() {
    //     return this.age;
    // }
}

const person = new Person('tom', 23);


