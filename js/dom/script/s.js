window.onload = function () {
  var box = document.getElementsByClassName('container')[0];
  var imgs = box.getElementsByTagName('img');
  var imgWidth = imgs[0].offsetWidth;
  var outWidth = 160;
  var boxwidth = imgWidth + outWidth * (imgs.length - 1);
  box.style.width = boxwidth + 'px';

  function setorigin() {
    for (var i = 1; i < imgs.length; i++) {
      imgs[i].style.left = imgWidth + outWidth * (i - 1) + 'px';
    }
  }
  setorigin();

  var slidWidth = imgWidth - outWidth;
  for (var i = 0; i < imgs.length; i++) {
    (function (i) {
      imgs[i].onmouseover = function () {
        setorigin();
        for (var j = 1; j <= i; j++) {
          imgs[j].style.left = parseInt(imgs[j].style.left) - slidWidth + 'px';
        }
      }
    })(i)

  }
}