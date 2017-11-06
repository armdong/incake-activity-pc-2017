(function($ , window , document){
    $(function(){
        var $btn_vcode = $('.btn-vcode'),
            $mask_result = $('#mask-result'),
            $result = $('.result'),
            $hint = $('.hint'),
            $btn = $('.btn'),
            $registerLi = $('.register').find('li'),
            $delete = $('.delete'),
            $rule = $('.rule'),
            flag = true;
            count = 0, // 验证重复获取验证码
            time = 58;

        $btn.click(function(){
            fnScrollTop($rule)
        });
        $registerLi.click(function(){
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
        $delete.click(function(){
            $mask_result.fadeOut();
        });
        $btn_vcode.click(function(){
            verification($btn_vcode);
        });


        function verification(obj){
            if(count == 0){
                count = 1;
                obj.addClass('active').text('59" 后重新发送');
                var interval = setInterval(function(){
                    obj.text(time-- +'" 后重新发送');
                    if(time==-1){
                        count = 0;
                        clearInterval(interval);
                        time = 58;
                        obj.removeClass('active').text('获取验证码');
                    }
                },1000);
            }
        }
    });
    // 滑倒指定位置
    function fnScrollTop($obj) {
        $('html,body').animate({ scrollTop: $obj.offset().top }, 800);
        $('.txt-mobile').focus();
    }

})(jQuery , window , document);
