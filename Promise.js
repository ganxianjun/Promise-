// Promise的封装
(function(window) {
    const PENDING = 'pending';
    const RESOLVED = 'resolved';
    const REJECTED = 'rejected';
    // peomise的状态改变
    function Promises(executor) {
        const _that = this;
        // 成功函数
        _that.onResolvedCallbacks = [];
        // 失败回调
        _that.onRejectedCallbacks = [];
        // promise的状态
        _that.status = PENDING;
        // 成功的值
        _that.value = undefined;
        // 失败原因
        _that.reson = undefined;
        // 成功的回调pending-》resolved
        // 将value作为new的peomise参数传递
        const resolve = function(value) {
            if (_that.status === PENDING) {
                _that.status = RESOLVED;
                // value返回的是promise和非promise实例
                // 基本类型或者引用类型
                _that.value = value;
                _that.onRejectedCallbacks.forEach(fn => fn(value));
            }
        };
        // 失败的回调pending-》rejected
        const reject = function(reson) {
            if (_that.status === PENDING) {
                _that.status = REJECTED;
                _that.reson = reson;
                _that.onRejectedCallbacks.forEach(fn => fn(reson));
            }
        };

        try {
            const callBackValue = executor(resolve, reject);
            // 返回的值是否是new的promise
            if (callBackValue instanceof Promises) {
                callBackValue.then(resolve, reject);
            }
            else {
                resolve(callBackValue);                
            }
        }
        catch (err) {
            reject(err);
        }
    }
    Promises.prototype.then = function(onResolved, onRejected) {
        // 优化点
        onResolved = typeof onResolved === 'function' ? onResolved : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reson => {throw reson};
        const _that = this;
        return new Promises((resolve, reject) => {
            if (_that.status === RESOLVED) {
                setTimeout(() => {
                    try {
                        onResolved(_that.value);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            }
            else if (_that.status === REJECTED) {
                setTimeout(() => {
                    try {
                        onRejected(_that.reson);
                    } catch (err) {
                        reject(err);
                    }
                });
            }
            else {
                _that.onResolvedCallbacks.push(onResolved);
                _that.onRejectedCallbacks.push(onRejected);
            }
        });
    }
    Promises.prototype.catch = function(onRejected) {
        const _that = this;
        _that.then(undefined, onRejected);
    };
    window.Promises = Promises;
})(window);
