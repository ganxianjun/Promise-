一：this的默认绑定
    1. 全局作用域下指向的是window
    2. fn的this指向window
    3. 函数嵌套函数的独立调用指向的是window
    4. IIFE 自执行函数指向的是window
    5. 闭包函数默认指向window

二：隐式绑定
    1. use strict模式下面的this指向undefined
    2. 谁调用指向谁

    var name = '小红';
    var a = {name: 'tom'};
    console.log(a.name);

三：隐式的丢失
    1. 赋值变量时 (window)
        var name = 'xiaohong';
        var b = {name: 'tom', d() {console.log(this.name)}};
        var c = b.d;
        console.log(c());
    2. 形参传递 (window)
        function q() {
            console.log(this);
        }
        function f(fn) {
            return fn();
        } 
        console.log(f(q));

    3. 内置函数setTimeout,setInterval (window)

    setTimeout(() => {
        console.log(this);
    })

    *4. 
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
    // 这里类似形参传递
    (p.eat = obj.eat)()




