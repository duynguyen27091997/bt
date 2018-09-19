$(function () {
    if (window.pageYOffset > 0) {
        $(".menutop").css("top", "0");
    }
    if (window.pageYOffset === 0) {
        $(".menutop").css("top", "50px");
    }
    $(window).on('scroll', function() {
        if (window.pageYOffset > 0) {
            $(".menutop").css({"top":"0","background-color":"rgba(255,255,255,0.6)"});
        }
        if (window.pageYOffset === 0) {
            $(".menutop").css({"top":"50px","background-color":"transparent"});
        }
    })
});