// array.from, 三个参数，target， map, this
const obj = {
    0: 3,
    1: 5,
    3: 7,
    length: 4
};
const arr = Array.from(obj, val => {
    return val;
});

// map遍历
const myMap = new Map();
myMap.set(0, 3);
myMap.set(1, 4);
myMap.set(2, 6);
myMap.set(3, 7);

// for (let val of myMap) {
//     console.log(val);
// };

// Array 和 Array.of
// Array的参数是一个的时候表示数组的长度，Array.of的是根据传的值创建对应的数组
const arrLen = new Array(3);
const arrOf = Array.of(3);

function arrayOf() {
    // [].slice.call(arrayLike)将经历这些步骤：让arrayLike拥有数组的slice方法，slice方法被调用，
    // 其作用目标为arrayLike，由于没有传入其他参数，slice()默认返回所有下标的元素并返回新数组.

    return [].slice.apply(arguments);
}
console.log(arrayOf(8, 2, 4));

