/*
 * author ganxianjun
 * tool 数组的快速排序
 * params arr
 * fn quicklySort
*/

// 该方法的基本思想是:
// 1．先从数列中取出一个数作为基准数。
// 2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。
// 3．再对左右区间重复第二步，直到各区间只有一个数。

const arr = [1, 4, 2, 5, 3, 6];
// 快速排序的方法
function quicklySort(arr) {
    const paramsType = Object.prototype.toString.call(arr);
    // 判断数据的类型
    if (paramsType === '[object Array]') {
        if (arr.length <= 1) {
            return arr;
        }
        // 第一步
        const randomNum = parseInt(Math.random() * arr.length);
        const val = arr[randomNum];
        // 第二步
        const arrL = [];
        const arrR = [];
        arr.map(item => {
            item > val ? arrR.push(item) : arrL.push(item);
            return item;
        });
        // 第三步
        return quicklySort(arrL).concat(quicklySort(arrR));
    }
    else {
        // 如果传的数据不是数组类型的数据进行提示
        console.log('参数必须是数组类型');
    }
}
// 快排方法的调用
console.log(quicklySort(arr));
