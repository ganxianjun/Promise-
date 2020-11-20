
// eg1
function e() {
    console.log(this);
};
function f() {
    console.log(this);
    function q() {
        console.log(this);
        function w() {
            'use strict';
            console.log(this);
        }
        w();
    }
    q();
}

f.call(e);

(function() {
    console.log(this);
})();

// eg2
var name = '小黄';
function a() {
    var name = '小a';
    console.log(this.name);
}
function d(i) {
    return i();
}
var b = {
    name: '小红',
    detail: function() {
        console.log(this.name);
    },
    bilibili() {
        return function() {
            console.log(this.name);
        }
    }
};
var c = b.detail;
b.a = a;
var e = b.bilibili();
// 执行
a();
c();
b.a();
d(b.detail);
e();

var a = '1';
function foo() {
    console.log(this.a);
}

var obj = {
    a: '2',
    eat: foo
}

var p = {a: '3'};
p.eat = obj.eat;

console.log(p.eat());
(p.eat)();
(p.eat = obj.eat)()

