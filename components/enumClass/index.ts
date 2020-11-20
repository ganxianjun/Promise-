// 定义一个将数组封装成可以枚举的类
// eg：[{alias: 'Man', valu: 'man', text: 'tom'}] => [{Man: 'Man'}]

const aliaxMenus = Symbol('aliaxMenu');
class Arr {
    // 构造函数
    constructor(...args: any[]) {
        this[aliaxMenu] = {};
        args.forEach((item, index, target) => {
            const {aliax = 'helloWorld', value = 'good'} = item;
            this[aliax] = value;
            this[value] = aliax;
            this[aliaxMenus][aliax] = item;
        })
    }
    // 静态类前面加一个static
    static play(value: any): any {
        console.log('这是一个值：' + value);
    }
    // 原型上面添加方法
    getValueByAliax(aliax: string) {
        return this[aliaxMenu][aliax].value;
    }
}

const person = new Arr({aliax: 'Man', value: 'tom是个好男孩', text: 'tom'});
console.log(person);
