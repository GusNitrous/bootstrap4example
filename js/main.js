$(document).ready(function() {
    $('.header').height($(window).height());

    $(window).on('resize', function() {
        $('.header').height($(window).height());
    });

    $("a.nav-link").click(function(e) {
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});