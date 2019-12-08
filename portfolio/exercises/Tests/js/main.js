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

    var editables = document.querySelectorAll(".editable");

    for (const element of editables) {
        element.setAttribute("contenteditable", true);
    }

    document.getElementById("makeB").onclick = function () {
        var editor = document.getElementById("editor");
        var selection = document.getSelection();
        var txtSelection = selection.toString();
        var allTxt = editor.textContent;
        selection.deleteFromDocument();
        var startPos = selection.anchorOffset;
        var endPos = selection.focusOffset;
        if (startPos > endPos) {
            let z = startPos;
            startPos = endPos;
            endPos = z;
        }
        var allTxtLength = allTxt.length;
        console.log(allTxtLength);
        console.log(allTxt);
        var firstPart = allTxt.slice(0, startPos);
        var secondPart = allTxt.slice(startPos, allTxtLength - 1);
        b = document.createElement("b");
        b.textContent = txtSelection;
        console.log(b);
        console.log(firstPart);
        console.log(secondPart);
        editor.innerHTML = editor.innerHTML + firstPart;
        editor.appendChild(b);
        editor.innerHTML = editor.innerHTML + secondPart;
        // var a = document.getElementById("anchor");
        // console.log(startPos);
        // console.log(endPos);
    }


});