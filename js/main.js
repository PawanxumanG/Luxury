
(function ($) {
    "use strict";

    // Sticky Navbar logic
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#main-nav').addClass('scrolled');
        } else {
            $('#main-nav').removeClass('scrolled');
        }
    });

    // NOTE: Hero Slider Initialization removed to lock background image

    // Services Carousel
    $(".services-carousel").owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        responsive: {
            0: { items: 1 },
            768: { items: 2 }
        }
    });

    // Testimonial Carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        nav: false,
        smartSpeed: 800
    });

    // Back to top button visibility
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 400) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });

    // Smooth scroll for nav links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

})(jQuery);
