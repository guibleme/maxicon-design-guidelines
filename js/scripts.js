jQuery(function () {
    var t = $(".section-txt"),
        r = $("nav ul li"),
        n = jQuery(window).width();
    n > 768 ? $(window).on("scroll", function () {
        var n = $(this).scrollTop();
        t.each(function () {
            var o = $(this).offset().top,
                e = o + $(this).outerHeight();
            n >= o && e >= n && (r.find("a").removeClass("current"), t.removeClass("current"), $(this).addClass("current"), r.find('a[href="#' + $(this).attr("id") + '"]').addClass("current"))
        })
    }) : r.find("a").removeClass("current")
}), $(window).scroll(function () {
    var t = $("aside"),
        r = $(window).scrollTop(),
        n = jQuery(window).width();
    n > 768 && (r > 130 ? t.addClass("fixed") : t.removeClass("fixed"));
    n < 768 ? t.removeClass("fixed") : null;
}), $(document).ready(function () {
    prettyPrint(), $(".menu-box a").click(function () {
        return $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 800
        }), !1
    })
});