// sort 方式
function sortArr(arr) {
    return arr.sort((a, b) => {
        return Math.random() - 0.5
    })
} 

const arr = [1, 2, 3, 4, 5];

// for 遍历,索引值与随机变化之后的索引值互换
function forArr(arr) {
    let len = arr.length;
    for (let i = len - 1; i > 0; i --) {
        const idx = Math.floor(Math.random() * (i  + 1));
        const val = arr[i];
        arr[i] = arr[idx];
        arr[idx] = val;
    }
    return arr;
}

// splice
function spliceArr(arr) {
    const newArr = [];
    while(arr.length) {
        const idx = Math.floor(Math.random() * (arr.length));
        newArr.push(arr[idx]);
        arr.splice(idx, 1);
    }
    return newArr;
}

