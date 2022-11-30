window.addEventListener('load', function() {

    var left = document.querySelector('.left');
    var lis = left.getElementsByTagName('li');
    var bd = document.querySelector('.bd');
    var hd = document.querySelector('.hd');
    //为功能小li添加自定义属性index，用作索引
    for (var i = 1; i < lis.length; i++) {
        lis[i].setAttribute('index', i);

    }
    for (var i = 1; i < lis.length; i++) {
        // 点击功能小li，改变背景、字体颜色
        lis[i].addEventListener('click', function() {
            for (var i = 1; i < lis.length; i++) {
                lis[i].style.backgroundColor = '';
                lis[i].style.color = '#000';
                lis[i].style.borderLeft = '';
                //隐藏bd所有模块
                bd.children[i - 1].style.display = 'none';
            }
            this.style.backgroundColor = '#ea5947';
            this.style.color = '#fff';
            this.style.borderLeft = '5px solid #000';
            //修改导航头内容
            var content = this.innerText;
            hd.innerHTML = '当前位置：首页>>教学互动>>' + content;
            //显示当前功能小li对应模块
            var index = this.getAttribute('index') - 1;
            bd.children[index].style.display = 'block';
        })

        //鼠标经过功能小li，鼠标成小手样式，离开恢复
        lis[i].addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        })
        lis[i].addEventListener('mouseleave', function() {
            this.style.cursor = '';
        })
    }

})