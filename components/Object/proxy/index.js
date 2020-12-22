let objs = {name: 'lili', age: 12};
const proxyObj = new Proxy(objs, {
    get(obj, key) {
        console.log('---', obj, key);
        return obj[key];
    },
    set(obj, key, val) {
        obj[key] = val;
        console.log('7777777777');
    }
});

