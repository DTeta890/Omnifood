$(document).ready(function () {
    // For the sticky navigation
    $(".js--section-features").waypoint(
        function (direction) {
            if (direction == "down") {
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
            }
        },
        {
            offset: "20%",
        }
    );
    // Scroll on buttons
    $(".js--scroll-to-plan").click(function () {
        $("html, body").animate(
            {
                scrollTop: $(".js--section-plans").offset().top,
            },
            1200
        );
    });
    $(".js--scroll-to-start").click(function () {
        $("html, body").animate(
            { scrollTop: $(".js--section-features").offset().top },
            1000
        );
    });
    // Navigation Scroll
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    event.preventDefault();
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top,
                        },
                        1000,
                        function () {
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                return false;
                            } else {
                                $target.attr("tabindex", "-1");
                                $target.focus();
                            }
                        }
                    );
                }
            }
        });
    // Animations
    $(".js--wp-1").waypoint(
        function () {
            $(".js--wp-1").addClass("animated fadeIn");
        },
        { offset: "80%" }
    );
    $(".js--wp-2").waypoint(
        function () {
            $(".js--wp-2").addClass("animated fadeInUp");
        },
        { offset: "80%" }
    );
    $(".js--wp-3").waypoint(
        function () {
            $(".js--wp-3").addClass("animated fadeIn");
        },
        { offset: "80%" }
    );
    $(".js--wp-4").waypoint(
        function () {
            $(".js--wp-4").addClass("animated pulse");
        },
        { offset: "80%" }
    );
    // Mobile Navigation
    $(".js--nav-icon").click(function () {
        let nav = $(".js--main-nav");
        let icon = $(".js--nav-icon i");
        nav.slideToggle(200);
        if (icon.hasClass("ion-navicon-round")) {
            icon.removeClass("ion-navicon-round");
            icon.addClass("ion-close-round");
        } else {
            icon.removeClass("ion-close-round");
            icon.addClass("ion-navicon-round");
        }
    });
});
