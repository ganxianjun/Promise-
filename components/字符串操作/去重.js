/*
 * author ganxianjun
 * to 去重
 * fn
 * 
*/ 
var a = '1acdaaabbc';

// 去重
function fn(str) {
  if (typeof str === 'string') {
    const arr = str.split('');
    console.log(arr);
    return [...new Set(arr)];
  }
  else {
    alert('请传入字符串');
  }
}

// 去相邻重复的数据
// 如果不加修饰符g，只会符合条件的第一个就会停止
function twoFn(str) {
    if (typeof str === 'string') {
        const newStr = str.replace(/(\w)\1*/g,'$1');
        console.log(newStr);
    }
    else {
        alert('请传入字符串');
    }
}

twoFn(a);