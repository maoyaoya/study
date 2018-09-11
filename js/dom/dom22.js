
/*var box = document.getElementById('box');
  console.log(box.style.width);  

  //计算后的样式
  var box = document.getElementById('box');
    var style = window.getComputedStyle ? window.getComputedStyle(box, null) : null || box.currentStyle;
    console.log(style.width);  //1350px
    console.log(style.height);  //21px

var box = document.getElementById('box');
    console.log(box.clientWidth);  //1350 不包括px,加了边框之后变成 1348
    console.log(box.scrollHeight);  //21
    console.log(box.offsetWidth);  //1350 包含边框、内边距和滚动条。
    console.log(box.clientLeft);  //左边框的宽度
    console.log(box.clientTop)
    console.log(box.offsetLeft);   //8 这组属性可以获取当前元素相对于父元素的位置。
    console.log(box.offsetParent);  //body  得到父元素
    
    //获取元素到body的距离
    function offsetLeft(element) {
        var parent = element.offsetParent;
        var left = element.offsetLeft;
        while (parent !== null) {
            left += parent.offsetLeft;
            parent = parent.offsetParent;
        }
        return left;
    }
    var box1 = document.getElementById('box1');
    console.log(box1.offsetLeft);  //20
    var left = offsetLeft(box1);
    console.log(left);    //48
*/


window.onload = function () {


    var box = document.getElementById('box');

    console.log(box.scrollTop);
} 