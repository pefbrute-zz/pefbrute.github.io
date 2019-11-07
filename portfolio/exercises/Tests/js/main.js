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

    // document.getElementById("MakeB").onclick = function() {makeBold()};
    // function makeBold() {
    //     var txt = window.getSelection();
    //     txt.collapseToEnd();
    // };

    // setSelectionTimeout(function () {
        // var txt = window.getSelection();
        //Selection Properties:
        // var anchNode = txt.anchorNode;
        // var anchOffset = txt.anchorOffset;
        // var fcsNode = txt.focusNode;
        // var fcsOffset = txt.focusOffset;
        // var isCollapsed = txt.isCollapsed;
        // var rangeCount = txt.rangeCount;
        // var type = txt.type;
        // window.alert("AnchorNode: " + anchNode +
        //     "\n" + "AnchorOffset: " + anchOffset +
        //     "\n" + "FocusNode: " + fcsNode +
        //     "\n" + "FocusOffset: " + fcsOffset +
        //     "\n" + "isCollapsed: " + isCollapsed +
        //     "\n" + "rangeCount: " + rangeCount +
        //     "\n" + "type: " + type
        // );

        //Selection Methods:
        // txt.addRange(1,10);
        // txt.collapse(1);
        // txt.collapseToEnd();
        // txt.collapseToStart();
        // window.alert(txt.containsNode());

        //;
    // }, 2000)

    setTimeout(function () {
        window.alert("document.baseURI is " + '"' + document.baseURI + '"' +
                    "\n" + "document.baseUROBJ");
    }, 2000)


});