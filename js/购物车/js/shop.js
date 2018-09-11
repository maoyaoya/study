
window.onload = function () {
  var list = document.getElementById('goodslist');
  var tr = list.children[1].rows;
  var che = document.getElementsByClassName('check');
  var checkAll = document.getElementsByClassName('check-all');
  var num = document.getElementById('num');
  var total = document.getElementById('total');
  var selected = document.getElementsByClassName('selected')[0];
  var view = document.getElementsByClassName('selected-view')[0];
  var selectedViewList = document.getElementById('selectedViewList');
  var deleteAll = document.getElementById('deleteAll');

  function getTotal() {
    var selected = 0;
    var price = 0;
    var htmlSrc = '';
    for (i = 0; i < tr.length; i++) {
      if (tr[i].getElementsByTagName('input')[0].checked) {
        tr[i].className = 'on';
        selected += parseInt(tr[i].getElementsByTagName('input')[1].value);
        price += parseFloat(tr[i].cells[4].innerHTML);
        htmlSrc += '<div><img src="' + tr[i].getElementsByTagName('img')[0].src + '"><span class="del" index=' + i + '>取消选择</span></div>';
      } else {
        tr[i].className = '';
      }

    }
    num.innerHTML = selected;
    total.innerHTML = price.toFixed(2);
    selectedViewList.innerHTML = htmlSrc;
    if (selected == 0) {
      view.className == 'selected-view no';
    }
  }

  function select() {
    var count = 0;
    for (var i = 0; i < che.length; i++) {
      if (che[i].checked) {
        count += 1;
      }
      if (count == che.length - 2) {
        for (var k = 0; k < checkAll.length; k++) {
          checkAll[k].checked = true;
        }
      }
    }
  }

  function getPrice(tr) {
    var tds = tr.cells;
    var price = tds[2].innerHTML;
    var num = tr.getElementsByTagName('input')[1].value;
    var subtotal = tds[4];
    subtotal.innerHTML = parseFloat(price * num).toFixed(2);
  }

  for (var i = 0; i < che.length; i++) {
    che[i].onclick = function () {
      if (this.className === 'check-all check') {
        for (var j = 0; j < che.length; j++) {
          che[j].checked = this.checked;
        }
      }
      if (this.checked == false) {
        for (var k = 0; k < checkAll.length; k++) {
          checkAll[k].checked = false;
        }
      }
      select();
      getTotal();
    }
  }

  selected.onclick = function () {
    if (view.className == 'selected-view no') {
      if (num.innerHTML != 0) {
        view.className = 'selected-view';
      }

    } else {
      view.className = 'selected-view no';
    }
  }

  selectedViewList.onclick = function (e) {
    e = e || window.event;
    var el = e.srcElement;
    if (el.className == 'del') {
      var index = el.getAttribute('index');
      var input = tr[index].getElementsByTagName('input')[0];
      input.checked = false;
      input.onclick();
    }
  }

  for (var k = 0; k < tr.length; k++) {
    tr[k].onclick = function (e) {
      e = e || window.event;
      var el = e.srcElement;
      var input = this.getElementsByTagName('input')[1];
      var cla = el.className;
      var reduce = this.getElementsByTagName('span')[0];
      var val = parseInt(input.value);
      switch (cla) {
        case 'add':
          reduce.innerHTML = '-';
          input.value = val + 1;
          getPrice(this);
          getTotal();
          break;
        case 'reduce':
          if (val > 1) {
            input.value = val - 1;
          }
          if (input.value <= 1) {
            reduce.innerHTML = '';
          }
          getPrice(this);
          getTotal();
          break;
        case 'del':
          var conf = confirm('确定要删除吗？');
          if (conf) {
            this.parentNode.removeChild(this);
          };
          break;
        default:
          break;
      }
    }
    tr[k].getElementsByTagName('input')[1].onkeyup = function () {
      var val = this.value;
      var tr = this.parentNode.parentNode;
      var reduce = tr.getElementsByTagName('span')[0];
      if (isNaN(val) || val < 1) {
        val = 1
      }
      this.value = val;
      if (val > 1) {
        reduce.innerHTML = '-';
      } else {
        reduce.innerHTML = '';
      }
      getPrice(tr);
      getTotal();
    }
  }
  deleteAll.onclick = function () {
    if (total.innerHTML != 0) {
      var conf = confirm('确定要删除吗？');
      for (var i = 0; i < tr.length; i++) {
        var input = tr[i].getElementsByTagName('input')[0];
        if (conf) {
          if (input.checked) {
            tr[i].parentNode.removeChild(tr[i]);
            i--;
          }
        }
      }
    }
  }
  checkAll[0].checked = true;
  checkAll[0].onclick();
}
