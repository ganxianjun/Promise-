// 定义一个可以枚举的类
// eg：[{alias: 'Man', valu: 'man', text: 'tom'}] => [{Man: 'Man'}]
var aliaxMenu = Symbol('aliaxMenu');
var Enums = /** @class */ (function () {
    function Enums() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this[aliaxMenu] = {};
        args.forEach(function (item, index, target) {
            var _a = item.aliax, aliax = _a === void 0 ? 'helloWorld' : _a, _b = item.value, value = _b === void 0 ? 'good' : _b;
            _this[aliax] = value;
            _this[value] = aliax;
            _this[aliaxMenu][aliax] = item;
        });
    }
    Enums.play = function (value) {
        console.log('这是一个值：' + value);
    };
    Enums.prototype.getValueByAliax = function (aliax) {
        return this[aliaxMenu][aliax].value;
    };
    return Enums;
}());
var person2 = new Enums({ aliax: 'Man', value: 'tom是个好男孩', text: 'tom' });
console.log(person2);
