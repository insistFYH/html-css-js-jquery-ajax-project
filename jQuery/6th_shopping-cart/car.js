$(function() {
    $(".checkall").change(function() {
        //全选按钮选中，所有按钮都选中，全选按钮不选中，所有按钮不选中
        if ($(this).prop("checked")) {
            $(".j-checkbox,.checkall").prop("checked", true)

        } else {
            $(".j-checkbox,.checkall").prop("checked", false)
            console.log($(this).prop("checked"));
        }
        //全选按钮选中，给所有商品项添加背景颜色，全选按钮不选中，移除所有商品背景颜色
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    })

    $(".j-checkbox").change(function() {
        //子按钮全选中时，全选按钮选中
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)
        }
        //按钮选中，当前商品项添加背景颜色，不选中，移除背景颜色
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    })

    //点击＋按钮，数量值加一   ;  小计
    $(".increment").click(function() {
        var num = $(this).siblings(".itxt").val();
        num++;
        $(this).siblings(".itxt").val(num)
        var currentnum = $(this).siblings(".itxt").val()
        var onePrice = $(this).parents(".p-num").siblings(".p-price").text();
        onePrice = onePrice.substr(1)
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (currentnum * onePrice).toFixed(2));
        getnum();
    })

    //点击-按钮，数量减一
    $(".decrement").click(function() {
            var num = $(this).siblings(".itxt").val();
            if (num > 1) {
                num--;
                $(this).siblings(".itxt").val(num)
                var currentnum = $(this).siblings(".itxt").val()
                var onePrice = $(this).parents(".p-num").siblings(".p-price").text();
                onePrice = onePrice.substr(1)
                $(this).parents(".p-num").siblings(".p-sum").text("￥" + (currentnum * onePrice).toFixed(2));
            }
            getnum();

        })
        //改变数量，小计
    $(".itxt").change(function() {
        var num = $(this).val();
        var onePrice = $(this).parents(".p-num").siblings(".p-price").text();
        onePrice = onePrice.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (num * onePrice).toFixed(2))
        getnum();
    })

    //封装函数统计商品数、总价格
    function getnum() {
        var num = 0;
        var price = 0;

        //统计商品数
        $(".itxt").each(function(i, ele) {
            num += parseInt($(ele).val());
        })
        $(".amount-sum em").text(num);
        //统计总价格
        $(".p-sum").each(function(i, ele) {
            price += parseFloat($(ele).text().substr(1));
        })
        $(".price-sum em").text("￥" + price.toFixed(2));

    }
    getnum();
    //点击删除按钮，删除商品项
    $(".p-action").click(function() {
        $(this).parent(".cart-item").remove();
        getnum();
    })

    //删除选中商品项
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getnum();
    })

    //清空购物车
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getnum();
    })


})