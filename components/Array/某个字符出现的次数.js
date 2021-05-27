/*
 * author ganxianjun
 * 某个字符再字符串中出现的次数
 * sourceStr 要查询的字符
 * targetStr 目标字符串
*/

function repeatNum(sourceStr, targetStr) {
    // 判断sourthStr 和 targetStr的数据类型
    if ((typeof sourceStr === 'string') && (typeof targetStr === 'string')) {
        // 正则方法
        const arr = targetStr.match(new RegExp(sourceStr, 'g')) || [];
        // split 的方法
        // const arr = targetStr.split(sourceStr);
        console.log(arr);
    }
    else {
        console.log('参数必须是字符串类型的数据！');
    }
}
const sourceStr = 'abR';
const targetStr = 'abdbaabc';

repeatNum(sourceStr, targetStr);
