$(function() {
    // 点击发送按钮
    $('.btn').click(function() {
        // 获取到文本框的值
        var text1 = $("#text1").val();
        // 判断是否为空值
        if (text1.trim().length > 0) {
            $(".menu").append(`<li class="top_right" style="margin-top:20px;">
            <span class="message">${text1}</span>
            <img src="./img/me.jpg" class="left">
        </li>`);
            // 文本框值进行清空
            $("#text1").val('');
            // 调用对话函数
            getTL(text1);
        } else {
            $("#text1").val('');
        };
    });
    $('#text1').on("keyup", function(e) {
        if (e.keyCode === 13) {
            $('.btn').click();
        }
    });
    //【2】进行对话操作
    function getTL(text) {
        var data = {
            key: '758ecd943dd644b59ff2d1f73759500d',
            info: text
        };
        $.post("http://www.tuling123.com/openapi/api", data, (result) => {
            console.log(result);
            if (result.code === 100000) {
                $(".menu").append(`<li class="top_left" style="margin-top: 100px;">
                <img src="./img/you.jpg" /> <span class="message">${result.text}</span></li>`);
            } else if (result.code === 40004) {
                $(".menu").append(`<li class="top_left">
                <img src="./img/you.jpg" style="margin-top: 80px;" /> <span class="message">今天的俺有点瞌睡了,让俺好好休息休息,明天再来看你哦!</span></li>`);
            };
        });
    };
});