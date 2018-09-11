/**
 * 
 * input.onclick = function () {
        alert('lee');
    }
 * 
 * var input = document.getElementsByTagName('input')[0];
    input.ondblclick = function () {
        alert(2);   //双击
    }
    
    
    input.onmousedown = function () {
        alert('你按了');   //当用户按下了鼠标还未弹起时触发。
    }

    mouseup：当用户释放鼠标按钮时触发。

    mouseover：当鼠标移到某个元素上方时触发。

    mouseout：当鼠标移出某个元素上方时触发。

    var input = document.getElementsByTagName('input')[0];
    input.onmousemove = function () {
        alert('Lee');   //mousemove：当鼠标指针在元素上移动时触发。
    };

    onkeydown = function () {
        alert('lll');//keydown：当用户按下键盘上任意键触发，如果按住不放，会重复触发。
    }

    window.onload = function () {
    var form = document.getElementsByTagName('form')[0];
    form.onsubmit = function () {
        alert('Lee');
    }
}

window.onload = function () {
    var input = document.getElementsByTagName('input')[0];
    input.onclick = function () {
        alert(this.value);
    }
}

 input.onclick = function () {
        //alert(arguments.length);  //1,在执行函数没有传递参数的时候，获得了一个隐藏的参数
        alert(arguments[0]);    //[object MouseEvent],这个参数其实就是event对象。
    }

 function box() {
    alert(arguments.length);
}
//box();  //0   


var input = document.getElementsByTagName('input')[0];
    input.onclick = function (evt) {
        var e = evt || window.event;   //兼容
        alert(evt);    //IE8及以下不支持
    }


    //鼠标事件

    window.onload = function () {
    function getButton(evt) {
        var e = evt || window.event;
        if (evt) {
            return e.button;
        } else if (window.event) {
            switch (e.button) {
                case 1:
                    return 0;
                    break;
                case 2:
                    return 2;
                    break;
                case 4:
                    return 1;
                    break;
            }
        }
    }
    document.onmouseup = function (evt) {
        if (getButton(evt) == 0) {
            alert('zuo');
        } else if (getButton(evt) == 1) {
            alert('zhong');
        } else if (getButton(evt) == 2) {
            alert('you');
        }
    }
}


document.onclick = function (evt) {
        var e = evt || window.event;
        alert(e.clientX + ',' + e.clientY);
        alert(e.screenX + ',' + e.screenY);
    };

    //键盘事件
    document.onkeydown = function (evt) {
        alert(evt.keyCode);
    }

    function getTarget(evt) {
        var e = evt || window.event;
        return e.target || e.srcElement;  //兼容得到dom对象
    }
    document.onclick = function (evt) {
        var target = getTarget(evt);
        alert(target);
    }


//阻止冒泡
    function stop(evt) {
        var e = evt || window.event;
        window.event ? e.cancelBubble = true : e.stopPropagation();
    }
    
    
    
    window.onload = function () {
    var box = document.getElementById('box');
    box.onclick = function () {
        alert('l');
        //toBule();    通过匿名函数执行某一个函数，里面的this就代表window，可以通过call（this）
        //但是只执行一次
    }
}

function toBule() {
    //alert(this);   //window
    this.className = 'blue';
    this.onclick = toRed;
}
function toRed() {
    this.className = 'red';
    this.onclick = toBule;
}


//添加事件函数
//obj相当于window，type相当于onload，fn相当于function
//对象操作可以使用数组操作来完成
function addEvent(obj, type, fn) {
    //用于保存上一个事件
    var saved = null;
    //判断事件是否存在
    if (typeof obj['on' + type] == 'function') {
        saved = obj['on' + type];		//保存上一个事件
    }
    //执行事件
    obj['on' + type] = function () {
        if (saved) saved();
        fn.call(this);							//把this传递过去
    };

}
//当不停的切换的时候，浏览器突然卡死，并且报错：too much recursion，太多的递归
//因为积累了太多的保存的事件，
//解决方案，就是用完的事件，就立刻移除掉
function removeEvent(obj, type, ) {
    if (obj['on' + type]) obj['on' + type] = null;
}
addEvent(window, 'load', function () {
    var box = document.getElementById('box');
    addEvent(box, 'click', function () {				//目的达到，每次都执行，不影响
        alert('Lee');
    });
    addEvent(box, 'click', toBule);						//this没有传递过去
});
function toBule() {
    //alert(this);   //window
    this.className = 'blue';
    removeEvent(this, 'click');
    addEvent(this, 'click', toRed);
}
function toRed() {
    this.className = 'red';
    removeEvent(this, 'click');
    addEvent(this, 'click', toBule);

}


window.addEventListener('load', function () {
    alert('lee');
}, false)    //并且它们都接受3个参数；事件名、函数、冒泡或捕获的布尔值(true表示捕获，false表示冒泡)。
//W3C的现代事件绑定比我们自定义的好处就是：1.不需要自定义了；2.可以屏蔽相同的函数；3.可以设置冒泡和捕获。

//W3C现代事件绑定来写事件切换器,IE8jiyixia不支持这个事件
window.addEventListener('load', function () {
    var box = document.getElementById('box');
    box.addEventListener('click', function () {
        alert('lee');
    })
    box.addEventListener('click', toBule, false);
})
function toBule() {
    //alert(this);   //window
    this.className = 'blue';
    this.removeEventListener('click', toBule, false);
    this.addEventListener('click', toRed, false);
}
function toRed() {
    this.className = 'red';
    this.removeEventListener('click', toRed, false);
    this.addEventListener('click', toBule, false);
}

 //ie8及以下，可以忽略 
window.attachEvent('onload', function () {
    var box = document.getElementById('box');
    box.attachEvent('onclick', toBlue);
});

function toRed() {
    var that = window.event.srcElement;
    that.className = 'red';
    that.detachEvent('onclick', toRed);
    that.attachEvent('onclick', toBlue);
}

function toBlue() {
    var that = window.event.srcElement;
    that.className = 'blue';
    that.detachEvent('onclick', toBlue);
    that.attachEvent('onclick', toRed);
}



window.onload = function () {
    var box = document.getElementById('box');
    box.onmouseover = function (evt) {
        alert(evt.relatedTarget);  //获取移入box最近的那个元素对象
    }
}


 var input = document.getElementsByTagName('input')[0];
    input.onkeyup = function (e) {
        if (e.ctrlKey && e.keyCode == 13) fm.submit();  ///判断按住了ctrl和enter键触发
    }

    console.log(fm.elements[0]);
    console.log(fm.elements[0].form == fm)   //true
    var text = fm.elements[2];
    // text.select();  //可以将文本框里的文本选中，并且将焦点设置到文本框中。
    text.setSelectionRange(0, 1);
    text.focus();              //两个一起配合有效，选定了第一个字符
    addEvent(text, 'copy', function (evt) {
        preDef(evt);//阻止复制
    });
    addEvent(text, 'paste', function (evt) {
        preDef(evt);
    });
    
    
    
    window.onload = function () {
    var fm = document.getElementsByTagName('form')[0];
    addEvent(fm.elements[0], 'keyup', tabNext);
    addEvent(fm.elements[1], 'keyup', tabNext);
    addEvent(fm.elements[2], 'keyup', tabNext);
}
function addEvent(obj, type, fn) {
    //用于保存上一个事件
    var saved = null;
    //判断事件是否存在
    if (typeof obj['on' + type] == 'function') {
        saved = obj['on' + type];		//保存上一个事件
    }
    //执行事件
    obj['on' + type] = function () {
        if (saved) saved();
        fn.call(this);							//把this传递过去
    };

}
function preDef(evt) {
    var e = evt || window.event;
    if (e.preventDefault()) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

function tabNext(evt, fm) {
    var fm = document.getElementsByTagName('form')[0];

    var e = evt || window.event;
    var t = e.target;
    if (t.value.length == t.maxLength) {
        for (var i = 0; i < fm.elements.length - 1; i++) {
            if (fm.elements[i] == t) {
                fm.elements[i + 1].focus();
                return;
            }
        }
    }
}


function addEvent(obj, type, fn) {
    //用于保存上一个事件
    var saved = null;
    //判断事件是否存在
    if (typeof obj['on' + type] == 'function') {
        saved = obj['on' + type];		//保存上一个事件
    }
    //执行事件
    obj['on' + type] = function () {
        if (saved) saved();
        fn.call(this);							//把this传递过去
    };

}
window.onload = function () {
    var fm = document.getElementsByTagName('form')[0];
    var city = fm.elements['city'];
    //console.log(city.options);    //HTMLOptionsCollection(3)
    //console.log(city.type);       //select-one
    //console.log(city.options[0].text);   //北京
    //console.log(city.options[0].value);    //北京
    addEvent(city, 'change', function () {
        console.log(this.selectedIndex);   //得到对应的索引
        console.log(this.options[this.selectedIndex].text);   //得到对应的值
    })
    //city.selectedIndex = 1;   // 默认就从1开始
    city.options[2].selected = true;   //默认从2开始 
    //动态添加
    //var option = document.createElement('option');
    //option.appendChild(document.createTextNode('北京t'));
    //option.setAttribute('value', 2);
    //city.appendChild(option); 
    //2.
    var option = new Option('北京t', '2');
    // city.appendChild(option);  
    city.add(option, 0);                   //在第一个位置上添加
    //移出选项
    city.remove(0);              //移出第一个
    for (var i = 0; i < fm.sex.length; i++) {			//循环单选按钮
        if (fm.sex[i].checked == true) {			//遍历每一个找出选中的那个
            alert(fm.sex[i].value);				//得到值
        }
    }
}


try {										//尝试着执行try包含的代码
    window.abcdefg();						//不存在的方法
} catch (e) {								//如果有错误，执行catch，e是异常对象
    alert('发生错误啦，错误信息为：' + e);	//直接打印调用toString()方法
}
 */



