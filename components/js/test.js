/**
 * author ganxianjun
 * 2021.5.12
 */

var name = 'hello';

function fn() {
    var name = 'tom';
    var innerObj = {};
    innerObj.fnc = function() {
        console.log(this.name);
        console.log(name);
    }
    return innerObj;
}
var obj = fn();
obj.fnc();

var f = obj.fnc;
f();

