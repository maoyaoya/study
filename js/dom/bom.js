/*
document.onclick = function () {
    opener.document.write('子窗口让我输出的！');
}

//screenLeft  ie支持，screenX 火狐支持

var X = (typeof screenLeft == 'number') ? screenLeft : screenX;
var Y = (typeof screenTop == 'number') ? screenTop : screenY;
alert(X);
alert(Y);

alert(innerWidth);   //页面长度
alert(innerHeight);    //页面高度
alert(outerWidth);   //页面长度+边框
alert(outerHeight);   //页面高度+边框

setTimeout("console.log('lee')", 1000);

function box() {
    console.log('lee');
}

setTimeout(box, 1000);  //直接传入函数名就可


setTimeout(function () {
    console.log('lee');
}, 1000)       //推荐做法

var box = setTimeout(function () {
    console.log('lee');
}, 1000);
clearTimeout(box);    //取消超时调用


setInterval(function () {
    alert('lee');
}, 1000);               //重复不停执行


var box = setInterval(function () {
    alert('lee');
}, 1000);

clearInterval(box);   //取消间歇调用


var num = 0;
var max = 5;
setInterval(function () {
    num++;
    if (num == max) {
        clearInterval(this);
        alert('5');
    }
}, 1000)


var num = 0;
var max = 5;
function box() {
    num++;
    if (num == max) {
        console.log('5');
    } else {
        setTimeout(box, 1000);
    }
}
setTimeout(box, 1000);

alert(location);    //获取当前的URL

location.hash = '#24';//会跳转到新的URL，就是包含#24的URL
console.log(location.hash);  //#24
location.search = '?id=5&name=xf';
function get() {
    var args = [];
    var qs = location.search.length > 0 ? location.search.substring(1) : '';
    var q = qs.split('&');
    var item;
    for (var i = 0; i < q.length; i++) {
        item = q[i].split('=');
        name = item[0];
        value = item[1];
        args[name] = value;
    }
    return args;
}
var b = get();
console.log(b['id']);  //5
console.log(b['name']);//xf
console.log(b);  //[id: "5", name: "xf"]


location.assign('http://www.baidu.com');    //跳转

location.reload();    //最有效的重新加载，有可能从缓存加载
location.reload(true);
*/
function back() {
    history.back();
}
function forward() {
    history.forward();
}