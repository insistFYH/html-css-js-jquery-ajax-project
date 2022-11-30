window.addEventListener('load', function() {
    //鼠标进入focus显示按钮，离开隐藏按钮
    var focus = document.querySelector('.focus');
    var arrow_r = this.document.querySelector('.arrow-r');
    var arrow_l = this.document.querySelector('.arrow-l');
    var focusWidth = focus.offsetWidth;

    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;

    })
    focus.addEventListener('mouseleave', function() {
            arrow_l.style.display = 'none';
            arrow_r.style.display = 'none';
            timer = setInterval(function() {
                arrow_r.click();
            }, 2000)

        })
        //生成小圆点
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        //自定义变量
        li.setAttribute('index', i);
        //绑定点击事件，点击小圆点，变为白色，图片轮播
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            animate(ul, -index * focusWidth);
            //让点击按钮与点击小圆点同步
            num = index;
        })
    }
    //默认第一个小圆点颜色为白色
    ol.children[0].className = 'current';
    //克隆第一张图片
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //点击右侧按钮，图片轮播
    //图片索引
    var num = 0;
    //小圆点索引
    var circle = 0;
    //当前小圆点设置函数
    function circleCurrent() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    //节流阀
    var flag = true;
    //右侧按钮绑定点击事件，图片向右轮播
    arrow_r.addEventListener('click', function() {
            if (flag) {
                flag = false;
                if (num == ul.children.length - 1) {
                    ul.style.left = 0;
                    num = 0;
                }
                num++;
                animate(ul, -num * focusWidth, function() {
                    flag = true;
                });
                circle = num;
                circle < ol.children.length ? circle = circle : circle = 0;
                circleCurrent();
            }

        })
        //左侧按钮绑定点击事件，图片向左轮播
    arrow_l.addEventListener('click', function() {
            if (flag) {
                flag = false;
                if (num == 0) {
                    num = ul.children.length - 1;
                    ul.style.left = -focusWidth * num + 'px';
                }
                num--;
                animate(ul, -num * focusWidth, function() {
                    flag = true;
                });
                circle = num;
                circle < 0 ? circle = ol.children.length - 1 : circle = circle;
                circleCurrent();
            }
        })
        //自动播放轮播图
    var timer = setInterval(function() {
        arrow_r.click();
    }, 3000)
})