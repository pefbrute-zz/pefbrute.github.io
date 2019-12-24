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


    // document.getElementById("makeB").onclick = function () {

    //     console.clear();
    //     var editor = document.getElementById("editor");
    //     var selection = document.getSelection();
    //     console.log(selection);
    //     var txtSelection = selection.toString();
    //     console.log(txtSelection);
    //     var allTxt = editor.textContent.trim();
    //     console.log(allTxt);

    //     var txtSelectionNode = document.createTextNode(txtSelection);

    //     var startPos = selection.anchorOffset;
    //     var endPos = selection.focusOffset;
    //     if (startPos > endPos) {
    //         let z = startPos;
    //         startPos = endPos;
    //         endPos = z;
    //     }
    //     console.log(startPos);
    //     console.log(endPos);
    //     console.log(selection.anchorNode);
    //     console.log(selection.focusNode);
    //     selection.deleteFromDocument();

    //     editor.innerHTML = '';
    //     var allTxtLength = allTxt.length;
    //     console.log(allTxtLength);
    //     var b = document.createElement("b");
    //     console.log(b.textContent);
    //     b.appendChild(txtSelectionNode);
    //     console.log(b.textContent);
    //     var firstPart = allTxt.slice(0,startPos);
    //     if (startPos == 0) {
    //         let secondPart = allTxt.slice(endPos, allTxtLength);
    //         editor.appendChild(b);
    //         console.log(secondPart);
    //         editor.innerHTML = editor.innerHTML + secondPart;
    //     }
    //     else{
    //         let secondPart = allTxt.slice(endPos, allTxtLength);
    //         editor.innerHTML = editor.innerHTML + firstPart;
    //         editor.appendChild(b);
    //         editor.innerHTML = editor.innerHTML + secondPart;
    //     }
    // }

    // document.getElementById("makeB").onclick = function () {
    //     console.clear();
    //     var editor = document.getElementById("editor");
    //     var selection = document.getSelection();
    //     console.log(selection);
    //     var txtSelection = selection.toString();
    //     console.log(txtSelection);
    //     var allTxt = editor.textContent.trim();
    //     console.log(allTxt);

    //     var txtSelectionNode = document.createTextNode(txtSelection);

    //     var startPos = selection.anchorOffset;
    //     var endPos = selection.focusOffset;
    //     if (startPos > endPos) {
    //         let z = startPos;
    //         startPos = endPos;
    //         endPos = z;
    //     }
    //     console.log(startPos);
    //     console.log(endPos);
    //     console.log(selection.anchorNode);
    //     console.log(selection.focusNode);
    //     selection.deleteFromDocument();

    //     editor.innerHTML = '';
    //     var allTxtLength = allTxt.length;
    //     console.log(allTxtLength);
    //     var bStart = "<b>";
    //     var bEnd = "</b>";
    //     var bTotal = bStart + txtSelection + bEnd;
    //     if (startPos == 0) {
    //         let secondPart = allTxt.slice(endPos, allTxtLength);
    //         editor.innerHTML = bTotal + secondPart;
    //     } else {
    //         let firstPart = allTxt.slice(0, startPos);
    //         let secondPart = allTxt.slice(endPos, allTxtLength);
    //         editor.innerHTML = editor.innerHTML + firstPart + bTotal + secondPart;
    //     };
    // }

    document.getElementById("makeB").onclick = function () {
        var editor = document.getElementById("editor");
        let space = function space() {
            editor.appendChild(document.createTextNode(" "));
        }
        var allTxt = editor.textContent;
        var sel = document.getSelection();
        console.log(sel);
        console.log(sel.anchorNode.parentNode);


        var startPos = sel.anchorOffset;
        var endPos = sel.focusOffset;
        if (startPos > endPos) {
            let z = startPos;
            startPos = endPos;
            endPos = z;
        }
        // var range = sel.getRangeAt(0);
        // var ext = range.extractContents();
        // var b = document.createElement("b");
        // b.appendChild(ext);
        let fakeAnchorNode = sel.anchorNode.parentNode.cloneNode(true);
        let fakeFocusNode = sel.focusNode.parentNode.cloneNode(true);
        console.log(fakeAnchorNode.textContent);
        let fakeAnchorText = fakeAnchorNode.textContent;
        let fakeFocusText = fakeFocusNode.textContent;
        fakeAnchorNode.textContent.substring(startPos, fakeAnchorText.length - 1);

        editor.appendChild(fakeAnchorNode);
        space();
        editor.appendChild(fakeFocusNode);
        space();
        // var firstB = document.createTextNode("<b>");
        // var lastB = document.createTextNode("</b>");
        // console.log(range.cloneContents());
        // console.log(ext);

        // editor.appendChild(b);
        // editor.appendChild(firstB);
        // editor.appendChild(ext);
        // editor.appendChild(lastB);
    }

})