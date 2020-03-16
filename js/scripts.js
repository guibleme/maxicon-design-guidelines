const closeBtnFeedback = document.getElementById('close-msg');
closeBtnFeedback.onclick = hideCopyFeedback;

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
    m = jQuery(document).height();
    n > 768 && (r > 130 && m - r > 820 ? t.addClass("fixed") : t.removeClass("fixed"));
    n > 768 && (m - r < 820 ? t.addClass("fix-bottom") : t.removeClass("fix-bottom"));
    n < 768 ? t.removeClass("fixed") : null;
    console.log(m - r);
}), $(document).ready(function () {
    prettyPrint(), $(".menu-box a").click(function () {
        return $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 800
        }), !1
    })
});

function copyFunction(colorClass) {
    const el = document.createElement('textarea');
    el.className = "display-none";
    el.value = colorClass;
    document.getElementById('footer').appendChild(el);
    el.select();
    document.execCommand('copy');
    showCopyFeedback("Classe copiada: " + colorClass);
    document.getElementById('footer').removeChild(el);
}

function showCopyFeedback(message) {
    const msg = document.querySelector('div#actionmsg-container p');
    const msg_container = document.getElementById('actionmsg-container');
    msg.innerText = message;
    msg_container.style.visibility = 'visible';
    msg_container.style.display = 'flex';
    
    setTimeout(() => {
        hideCopyFeedback();
    }, 3000);
}

function hideCopyFeedback() {
    const msg = document.querySelector('div#actionmsg-container p');
    msg.innerText = "";
    const msg_container = document.getElementById('actionmsg-container');
    msg_container.style.visibility = 'hidden';
    msg_container.style.display = 'none';
}