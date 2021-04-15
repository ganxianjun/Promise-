function bind(arguments) {
    _that = this;
   console.log('bind ----');
    function newFun(...arg) {
        _that.call(this, arg);
    };
    return newFun;
}
Function.prototype.bind = bind;
