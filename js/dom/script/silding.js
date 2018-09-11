window.onload = function () {
  //获取容器对象
  var box = document.getElementsByClassName('container')[0];
  //获取nodelist对象集合
  var imgs = box.getElementsByTagName('img');
  //获取图片的宽度
  var imgwidth = imgs[0].offsetWidth;
  //设置图片露出的宽度
  var outwidth = 160;
  //设置容器的宽度
  var boxwidth = imgwidth + outwidth * (imgs.length - 1);
  box.style.width = boxwidth + 'px';
  //设置每张图片的初始位置
  function setorigin() {
    for (var i = 1; i < imgs.length; i++) {
      imgs[i].style.left = imgwidth + outwidth * (i - 1) + 'px';
    }
  }
  setorigin();
  //计算出图片需要滑动的距离
  var slidwidth = imgwidth - outwidth;
  //为每张图片绑定事件
  for (var i = 0; i < imgs.length; i++) {
    //使用立即调用的函数表达式，为了获取不同的i值
    (function (i) {
      imgs[i].onmouseover = function () {
        setorigin();
        for (var j = 1; j <= i; j++) {
          imgs[j].style.left = parseInt(imgs[j].style.left) - slidwidth + 'px';
        }
      }
    })(i);

  }
}