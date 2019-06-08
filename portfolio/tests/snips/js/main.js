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

$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
$('#header').addClass('header-scrolled');
} else {
$('#header').removeClass('header-scrolled');
}
});

if ($(window).scrollTop() > 100) {
$('#header').addClass('header-scrolled');
}

// Smooth scroll for the navigation and links with .scrollto classes
$('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
var target = $(this.hash);
if (target.length) {
var top_space = 0;

if ($('#header').length) {
top_space = $('#header').outerHeight();

if (! $('#header').hasClass('header-scrolled')) {
top_space = top_space - 20;
}
}

$('html, body').animate({
scrollTop: target.offset().top - top_space
}, 1500, 'easeInOutExpo');

if ($(this).parents('.main-nav, .mobile-nav').length) {
$('.main-nav .active, .mobile-nav .active').removeClass('active');
$(this).closest('li').addClass('active');
}

if ($('body').hasClass('mobile-nav-active')) {
$('body').removeClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
$('.mobile-nav-overly').fadeOut();
}
return false;
}
}
});

// Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('.main-nav, .mobile-nav');
var main_nav_height = $('#header').outerHeight();

$(window).on('scroll', function () {
var cur_pos = $(this).scrollTop();

nav_sections.each(function() {
var top = $(this).offset().top - main_nav_height,
bottom = top + $(this).outerHeight();

if (cur_pos >= top && cur_pos <= bottom) {
main_nav.find('li').removeClass('active');
main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
}
});
});

if ($('.main-nav').length) {
var mobile_nav = $('.main-nav').clone().prop({
class: 'mobile-nav d-lg-none'
});
$('body').append(mobile_nav);
$('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
$('body').append('<div class="mobile-nav-overly"></div>');

$(document).on('click', '.mobile-nav-toggle', function(e) {
$('body').toggleClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
$('.mobile-nav-overly').toggle();
});

$(document).on('click', '.mobile-nav .drop-down > a', function(e) {
e.preventDefault();
$(this).next().slideToggle(300);
$(this).parent().toggleClass('active');
});

$(document).click(function(e) {
var container = $(".mobile-nav, .mobile-nav-toggle");
if (!container.is(e.target) && container.has(e.target).length === 0) {
if ($('body').hasClass('mobile-nav-active')) {
$('body').removeClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
$('.mobile-nav-overly').fadeOut();
}
}
});
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
$(".mobile-nav, .mobile-nav-toggle").hide();
}


});