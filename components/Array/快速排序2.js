/*
 * author ganxianjun
 * 快速排序联系
*/

const arr = [1, 3, 4, 2, 1, 6];

function quicklySort(arr) {
    // 判断数据类型
    const dataType = Object.prototype.toString.call(arr);
    if (dataType === '[object Array]') {
        // 随机获取数组的一个元素x
        // 建立两个数组 arrA, arrB
        // 小于x的数据放在arrA中，否则放入arrB中
        // 递归数组
        const len = arr.length;
        if (len <= 1) {
            // 注意，递归必须要有出口
            return arr;
        }
        const arrA = [];
        const arrB = [];
        const randomNum = parseInt(Math.random()*len);
        // 注意，这里的返回值
        const x = arr.splice(randomNum, 1)[0];

        arr.forEach(element => {
            const curArr = element < x ? arrA : arrB;
            curArr.push(element);
        });
        return quicklySort(arrA).concat([x], quicklySort(arrB));
    }
    else {
        console.log('请传入数组类型的数据！');
    }
}
const newArr = quicklySort(arr);
console.log(newArr);