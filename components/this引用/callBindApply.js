/** 
 * author ganxianjun
 * 2021.5.1
*/

var arr = [];
var str = '12';
function fn() {
    console.log(this);
}

fn.call(arr);
