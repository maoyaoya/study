
window.onload = function () {
  var demo = document.getElementsByClassName('demo')[0];
  var small = document.getElementsByClassName('small')[0];
  var float = document.getElementsByClassName('float')[0];
  var bigimg = document.getElementsByTagName('img')[1];
  var big = document.getElementsByClassName('big')[0];
  var mark = document.getElementById('mark');

  mark.onmouseover = function () {
    float.style.display = 'block';
    big.style.display = 'block';
  }
  mark.onmouseout = function () {
    float.style.display = 'none';
    big.style.display = 'none';
  }
  mark.onmousemove = function (e) {
    e = e || window.event;
    var left = e.clientX - demo.offsetLeft - small.offsetLeft - float.offsetWidth / 2;
    var top = e.clientY - demo.offsetTop - small.offsetTop - float.offsetHeight / 2;
    if (left < 0) {
      left = 0;
    } else if (left > mark.offsetWidth - float.offsetWidth) {
      left = mark.offsetWidth - float.offsetWidth;
    }
    if (top < 0) {
      top = 0;
    } else if (top > mark.offsetHeight - float.offsetHeight) {
      top = mark.offsetHeight - float.offsetHeight;
    }
    float.style.left = left + 'px';
    float.style.top = top + 'px';

    var percentX = left / float.offsetWidth;
    var percentY = top / float.offsetHeight;

    bigimg.style.left = -percentX * big.offsetWidth + 'px';
    bigimg.style.top = -percentY * big.offsetHeight + 'px';
  }
}