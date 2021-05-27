/*
 * author ganxianjun
 * 冒泡排序联系
*/

const arr = [1, 3, 2, 4, 3, 2];
const default_type = '[object Array]';

function fn(arr) {
    const dataType = Object.prototype.toString.call(arr);
    if (dataType === default_type) {
        let val = '';
        const len = arr.length;
        // 注意，避免影响原来的数组
        const cloneArr = arr.slice(0, );
        for(let i = 0; i < len - 1; i ++) {
            for(let j = i + 1; j < len; j ++) {
                if (cloneArr[i] > cloneArr[j]) {
                    val = cloneArr[j];
                    cloneArr[j] = cloneArr[i];
                    cloneArr[i] = val;
                }
            }
        }
        return cloneArr;
    }
    else {
        console.log('参数应该是数组类型的数据！');
    }
}

const newArr = fn(arr);
console.log(newArr, arr);
