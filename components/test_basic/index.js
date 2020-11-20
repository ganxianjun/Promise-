// 数组对象去重

// reduce方法
function removeRepeate(arr, key) {
    if (arr instanceof Array) {
        const obj = {};
        return arr.reduce((firstItem, nextItem) => {
            console.log(firstItem);
            obj[nextItem[key]] ? '' : obj[nextItem[key]] = firstItem.push(nextItem);
            return firstItem;
        }, [])
    }
}

// 自定义封装bind
var a = {name: 'tom'};
var b = {name: 'v', c: function(value1, value2) {
    console.log(value1 + value2);
}};

Function.prototype.myBind = function(self, ...args) {
    const _that = this;
    if (typeof _that !== 'function') {
        throw new TypeError(`${this} is not a function`);
    }
    return function callbacks(value) {
        const params = args.concat(Array.prototype.slice.call(arguments));
        _that.apply(self, params);
    }
}

b.c.myBind(a, 1)(2);
