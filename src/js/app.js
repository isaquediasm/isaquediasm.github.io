jQuery("document").ready(function ($) {

    var header2 = $('.nav-menu');
    $(header2).addClass("display-none");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {

            header2.css("display", "block");

        } else {

            header2.css("display", "none");
        }
    });

    // Closes the sidebar menu
    $("#menu-close").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $('.link').click(function () {
        $('#wrapper').scrollTo($(this).attr('href'), 800);

        $('.link').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });
});


function setPosition(check, div, p1, p2, p3, p4) {
    if (check === '#box1') {
        $(div).scrollTo(p1, 800);
    } else if (check === '#box2') {
        $(div).scrollTo(p2, 800);
    } else if (check === '#box3') {
        $(div).scrollTo(p3, 800);
    } else {
        $(div).scrollTo(p4, 800);
    }
};
