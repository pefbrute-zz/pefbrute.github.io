$(document).ready(function () {
    /*AOS START*/
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
    /*AOS END*/

    var siteCarousel = function () {
        if ($('.nonloop-block-13').length > 0) {
            $('.nonloop-block-13').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                margin: 0,
                autoplay: true,
                nav: true,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                responsive: {
                    600: {
                        margin: 0,
                        nav: true,
                        items: 2
                    },
                    1000: {
                        margin: 0,
                        stagePadding: 0,
                        nav: true,
                        items: 3
                    },
                    1200: {
                        margin: 0,
                        stagePadding: 0,
                        nav: true,
                        items: 4
                    }
                }
            });
        }


        if ($('.nonloop-block-14').length > 0) {
            $('.nonloop-block-14').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                margin: 0,
                autoplay: true,
                dots: false,
                nav: false,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                responsive: {
                    600: {
                        margin: 20,
                        nav: true,
                        items: 2
                    },
                    1000: {
                        margin: 30,
                        stagePadding: 20,
                        nav: true,
                        items: 2
                    },
                    1200: {
                        margin: 30,
                        stagePadding: 20,
                        nav: true,
                        items: 3
                    }
                }
            });

            $('.customNextBtn').click(function () {
                $('.nonloop-block-14').trigger('next.owl.carousel');
            })
            $('.customPrevBtn').click(function () {
                $('.nonloop-block-14').trigger('prev.owl.carousel');
            })
        }



        $('.slide-one-item').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            smartSpeed: 900,
            autoplayTimeout: 7000,
            stagePadding: 0,
            margin: 0,
            autoplay: true,
            nav: true,
            navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
        });

        $('.slide-one-item').on('translated.owl.carousel', function (event) {
            console.log('translated');
            $('.owl-item.active').find('.js-slide-text').addClass('active');
        });
        $('.slide-one-item').on('translate.owl.carousel', function (event) {
            console.log('translate');
            $('.owl-item.active').find('.js-slide-text').removeClass('active');
        });

        $('.owl-item.active').find('.js-slide-text').addClass('active');


    };
    siteCarousel();



});