/*
 * author ganxianjun
 * fn noVoid
 * to：去除字符串中空格的方式
*/
function noVoid(str) {
    // 判断传的字符串的类型
    if (typeof str === 'string') {
        // 利用的是split
        const newStr = str.split(' ').join('');
        // 使用replace
        const strs = str.replace(/\s/g, '');
        console.log(newStr, str.split(' '), strs);
    }
    else {
        alert('请传字符串类型的数据')
    }
}

const str = '   a b   c';
// noVoid(str);

/*
 * author ganxianjun
 * fn toUpperCase
 * to：将字母转成大写
 * match 匹配的值 $1 代表的是第一个分组括号 
 * offset 匹配到的子字符串在原字符串中的偏移量 
 * string 被匹配的原字符串
*/
function toUpperCase(str) {
    if (typeof str === 'string') {
        // 利用replace转字母的大小写
        const strs = str.replace(/-(\w)/g, function(match, $1, offset, string) {
            console.log($1, offset, string);
            return match.toUpperCase();
        });
        return strs;
    }
    else {
        alert('请传字符串类型的数据')
    }
}
const str2 = 'a-b-c';
// console.log(toUpperCase(str2));

/*
 * author ganxianjun
 * fn maxStrNum
 * to 查找字符串中出现最多的字符和个数
*/ 

function maxStrNum(str) {
    if(typeof str === 'string') {

    }
    else {
        alert('请传入字符串类型的数据');
    }
}

