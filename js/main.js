$(function(){
    $('.skills-item1').click(function(){
        $('.skills-item2').addClass('on');
    })
})

//모바일 토글

$(function(){
    $('.toggle-btn').click(function(){
        $('#gnb').addClass('on');
    })

    $('.close-btn').click(function(){
        $('#gnb').removeClass('on');
    })

    $('.toggle-btn').click(function(){
        $('.gnb-toggle-box').addClass('on');
    })

    $('.close-btn').click(function(){
        $('.gnb-toggle-box').removeClass('on');
    })

    $('.gnb-toggle-box').click(function(){
        $('#gnb').removeClass('on');
    })

    $('.gnb-toggle-box').click(function(){
        $('.gnb-toggle-box').removeClass('on');
    })
})
