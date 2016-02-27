$(document).ready(function () {
    $(window).load().scroll(function () {
        if($(document).scrollTop() > 50 ){
            $("#nav-fix").addClass("nav-fix");
            $(".top").fadeIn(500);           
        } else {
            $("#nav-fix").removeClass("nav-fix");
            $(".top").fadeOut(500);
        }
    });
    $("#top").click(function () {
        $("body,html").animate({
            scrollTop:"0"
        }, 300);
    });
    //回到顶部
    $(".tel").hover(function () {
        $(".tel-box").css("display", "block");
    }, function () {
        $(".tel-box").css("display", "none");
    });
    $(".code").hover(function () {
        $(".code-box").css("display", "block");
    }, function () {
        $(".code-box").css("display", "none");
    });
    $(".site-map").mouseover(function () {
        navOver($(".categorys"));
    });
    $(".site-map").mouseout(function () {
        navOut($(".categorys"));
    });
    $(".nav-head>li").mouseover(function () {
        if ($(this).children("div").length == 1) {           
            navOver($(this).children("div"));
        }
       
    });
    $(".nav-head>li").mouseout(function () {
        if ($(this).children("div").length == 1) {
            navOut($(this).children("div"));
        }
    });
    $(".items-li").mouseover(function () {
        var hidden = $(this).find("p").eq(0);
        hidden.stop(true, false).animate({
            height: "20px"
        }, 350);            
    });
    $(".items-li").mouseout(function () {
        var hidden = $(this).find("p").eq(0);
        hidden.stop(true, false).animate({
            height: "0"
        }, 350);
    });
    function navOver(obj) {
        obj.show().stop(true, false).animate({
            opacity: '1',
            height: "231px"
        }, 350, function () {
            obj.css({
                overflow: "visible"
            });
        });
    }
    function navOut(obj) {
        obj.stop(true, false).animate({
            opacity: '0',
            height: "0"
        }, 350, function () {
            obj.hide();
        });
    }
    //
    $(".item-dt").click(function () {
        var next = $(this).next();
        var ich = $(this).find("i").eq(0);
        if(next.css("display") == "none"){
            ich.removeClass("glyphicon-chevron-right");
            ich.addClass("glyphicon-chevron-down");
            next.css("display", "block");
        } else {
            ich.removeClass("glyphicon-chevron-down");
            ich.addClass("glyphicon-chevron-right");
            next.css("display", "none");
        }
    });
    //title 上的网站导航 的方法 end
    $('.sort a').click(function () {
        $(this).addClass("sort-active");
        $(this).siblings().removeClass("sort-active");
    });
    //content 的“排序”的点击方法 end
    $(".items-li").hover(function () {
        $(this).css("box-shadow", "0px 0px 6px #777");
    }, function () {
        $(this).css("box-shadow", "0px 0px 0px #fff");
    });
    //item 加hover 阴影

    function fix() {

    }
    //侧边固定nav end
});