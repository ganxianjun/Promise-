/*
 * author ganxianjun
 * 出现最多的字符
 * 注意的事项是：相同长度的字符要判断出来
*/

const str = 'tyuioiuy';

// 查看字符串中出现最多的字符
function maxCode(str) {
    if (typeof str === 'string') {
        // 将字串转成数组
        const strToArr = str.split('');
        // 将数组排序
        strToArr.sort((a, b) => (a > b ? 1 : -1));
        // 将排好序的数组转成字符串
        const newStr = strToArr.join('');
        // 使用replace
        // 用来存最大字符的值
        let maxVal = '';
        // 最大的长度
        let num = 0;
        let name = '';
        newStr.replace(/(\w)\1+/g, (match, $1) => {
            // 最大的值
            if (match.length > name.length) {
                name = match;
                maxVal = $1;
                num = match.length;
            }
            // 最大相同的值
            else if (match.length === name.length) {
                maxVal += ', ' + $1;
            }
            return match;
        });
        console.log(maxVal, '的最大值是 ' + num);
    }
    else {
        console.log('请传入字符串类型的数据');
    }
}

maxCode(str);
