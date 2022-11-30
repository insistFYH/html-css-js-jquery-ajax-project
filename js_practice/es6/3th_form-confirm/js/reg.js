window.onload = function() {
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    var telReg = /^1[3|5|7]\d{9}$/;
    var qqReg = /^\d{5,10}$/;
    var ncReg = /^[\u4e00-\u9fa5]{3,7}$/; //三到七个汉字
    var msgReg = /^\d{6}$/;
    var pwdReg = /^\w{6,16}$/;
    var surepwdReg = /^\w{6,16}$/;

    check(tel, telReg);
    check(qq, qqReg);
    check(nc, ncReg);
    check(msg, msgReg);
    check(pwd, pwdReg);
    check(surepwd, surepwdReg);

    function check(ele, reg) {
        ele.addEventListener('blur', function() {
            if (reg.test(ele.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>你输入的格式正确！';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>你输入的格式错误！'
            }
        })
    }
    surepwd.addEventListener('blur', function() {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>你输入的格式正确！';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次输入密码不一致！';
        }
    })
}