/*
 * author ganxianjun
 * mathod 冒泡排序
*/

const arr = [1, 2, 4, 3, 1];
// 冒泡排序
function bubuleSort(arr) {
    // 判断参数的类型
    const dataType = Object.prototype.toString.call(arr);
    if (dataType === '[object Array]') {
        // 循环排序,需要遍历arr.len - 1遍
        for(let i = 0; i < arr.length - 1; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    // 将小值负责给arr[i]
                    const minVal = arr[j];
                    arr[j] = arr[i];
                    arr[i] = minVal;
                }
            }
        }
        return arr;
    }
    else {
        console.log('请输入数组类型的数据');
    }
}
const newArr = bubuleSort(arr);
console.log(newArr);
