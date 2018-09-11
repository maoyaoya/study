function myReady(fn) {

    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn, false);
    } else {
        IEcontent();
    }
    //低版本iedomready
    function IEcontent(fn) {
        var done = false;
        var d = window.document;
        //只执行一次的回调函数
        var init = function () {
            if (!done) {
                done = true;
                fn();
            }
        }

            (function () {
                try {
                    d.documentElement.doScroll('left');
                } catch (e) {
                    setTimeout(arguments.callee, 50);
                    return;
                }
                init();
            })();
        //监听document的加载状态
        d.onreadystatechange = function () {
            //如果是在donmready之后的函数，应立即执行
            if (d.readyState == 'complete') {
                d.onreadystatechange = null;
                init();
            }
        }

    }
}