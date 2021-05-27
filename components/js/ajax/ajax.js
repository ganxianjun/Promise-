/** 
 * author ganxianjun
 * ajax 封装
 * 20201.4.24
*/
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
}
// 使用的是cors共享
xhr.open('GET', 'http://localhost:9000/server');
xhr.send();

