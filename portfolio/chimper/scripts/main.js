$(document).ready(function () {
   AOS.init();
   var typed = new Typed('.typed', {
       strings: ["Mobile Apps", "Web Apps", "WordPress"],
       typeSpeed: 80,
       backSpeed: 100,
       startDelay: 100,
       backDelay: 4900,
       loop: true,
       showCursor: true
   });
   	var siteStellar = function () {
   	    $(window).stellar({
   	        responsive: false,
   	        parallaxBackgrounds: true,
   	        parallaxElements: true,
   	        horizontalScrolling: false,
   	        hideDistantElements: false,
   	        scrollProperty: 'scroll'
   	    });
   	};
   	siteStellar();
});