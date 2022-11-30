window.addEventListener('load', function() {

    var left = document.querySelector('.left');
    var lis = left.getElementsByTagName('li');
    var bd = document.querySelector('.bd');
    var hd = document.querySelector('.hd');
    var interactive = document.querySelector('.interactive');

    for (var i = 1; i < lis.length; i++) {
        // 点击功能小li，改变背景、字体颜色
        lis[i].addEventListener('click', function() {
            for (var i = 1; i < lis.length; i++) {
                lis[i].style.backgroundColor = '';
                lis[i].style.color = '#000';
                lis[i].style.borderLeft = '';
            }
            this.style.backgroundColor = '#ea5947';
            this.style.color = '#fff';
            this.style.borderLeft = '5px solid #000';
        })

        //鼠标经过功能小li，鼠标成小手样式，离开恢复
        lis[i].addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        })
        lis[i].addEventListener('mouseleave', function() {
            this.style.cursor = '';
        })
    }

    //点击第一个功能小li，显示微信群聊二维码
    lis[1].addEventListener('click', function() {
        hd.innerText = '当前位置：首页>>教学互动>>微信群';
        bd.children[0].style.display = 'block';
        bd.children[1].style.display = 'none';
        if (bd.children.length > 2) {
            bd.removeChild(bd.children[2]);
        }
        // var h = document.createElement('h5');
        // h.innerText = '扫一扫二维码，微信交流';
        // h.className = 'image_title';
        // bd.appendChild(h);
        var ul = document.createElement('ul');
        bd.appendChild(ul);
        for (var i = 0; i < 9; i++) {
            var li = document.createElement('li');
            li.className = 'image';
            bd.children[bd.children.length - 1].appendChild(li);
        }
    })

    //点击第二个功能小li，显示qq群聊二维码
    lis[2].addEventListener('click', function() {
        hd.innerText = '当前位置：首页>>教学互动>>qq群';
        bd.children[0].style.display = 'block';
        bd.children[1].style.display = 'none';
        if (bd.children.length > 2) {
            bd.removeChild(bd.children[2]);
        }
        // var h = document.createElement('h5');
        // h.innerText = '扫一扫二维码，qq交流';
        // h.className = 'image_title';
        // bd.appendChild(h);
        var ul = document.createElement('ul');
        bd.appendChild(ul);
        for (var i = 0; i < 10; i++) {
            var li = document.createElement('li');
            li.className = 'image2';
            bd.children[bd.children.length - 1].appendChild(li);
        }
    })

    //点击第三个功能小li，显示师生互动内容
    lis[3].addEventListener('click', function() {
        hd.innerText = '当前位置：首页>>教学互动>>师生互动';
        bd.children[0].style.display = 'none';
        if (bd.children.length > 2) {
            bd.removeChild(bd.children[2]);
        }
        bd.children[1].style.display = 'block';

    })
})