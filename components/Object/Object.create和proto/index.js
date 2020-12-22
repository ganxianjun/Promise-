const objCreate = {
    show() {
        return this.name;
    }
}
const objCreates = Object.create(objCreate);
const objProto = {name: 'xiaomi'};
Object.setPrototypeOf(objProto, objCreate);

// console.log(Object.getPrototypeOf(objProto), objCreate.isPrototypeOf(objProto), objProto instanceof Object);

console.log('--', objProto);

const obj3 = Object.create(null);
obj3.__proto__ = 'hello';
console.log(obj3.__proto__);

const obj9 = {
    data: {proto: {}},
    get proto() {
        return this.data.proto;
    },
    set proto(val) {
        if (val instanceof Object) {
            this.data.proto =  val;        
        }    
    }
};

