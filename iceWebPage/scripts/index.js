$(document).ready(function () {
    $(window).load().scroll(function () {
        var sTop = $(document).scrollTop();
        if (sTop >= 200) {
            $("#toTop").fadeIn(300);
        } else {
            $("#toTop").fadeOut(300);
        }
        if (sTop >= 272) {
            //$(".index-nav").css({ height: "0px" });
            $(".index-nav").addClass("fix");
        } else {
            $(".index-nav").removeClass("fix");
        }
    });
    $(".header").hover(function () {
        $(this).find("h1").css("color", "#fff");
        $("small").stop(true,false).animate({
            opacity: '1',
            right:"340px"
        },800);
    }, function () {
        $(this).find("h1").css("color", "#efefef");
        $("small").stop(true,false).animate({
            opacity: '0',
            right:"220px"
        },800);
    });
    
    $(".menu li").click(function () {
        $(this).siblings().removeClass("nav-current");
        $(this).addClass("nav-current");
    });
    $("#toTop").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: 0
            }, 500);
        return false;
    });
});