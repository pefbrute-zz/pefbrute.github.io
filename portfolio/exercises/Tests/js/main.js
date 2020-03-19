// $(document).ready(function () {
/*AOS START*/
// AOS.init({
//     // Global settings:
//     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//     startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//     initClassName: 'aos-init', // class applied after initialization
//     animatedClassName: 'aos-animate', // class applied on animation
//     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

//     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//     offset: 120, // offset (in px) from the original trigger point
//     delay: 0, // values from 0 to 3000, with step 50ms
//     duration: 400, // values from 0 to 3000, with step 50ms
//     easing: 'ease', // default easing for AOS animations
//     once: false, // whether animation should happen only once - while scrolling down
//     mirror: false, // whether elements should animate out while scrolling past them
//     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
// });
/*AOS END*/


var editables = document.querySelectorAll(".editable");
for (const element of editables) {
    element.setAttribute("contenteditable", true);
}


document.getElementById("makeB").onclick = function () {
    debugger;
    console.clear();
    var editor = document.getElementById("editor");
    let space = function space() {
        editor.appendChild(document.createTextNode(" "));
    }
    var allTxt = editor.textContent;
    var sel = document.getSelection();
    var startPos = sel.anchorOffset;
    var endPos = sel.focusOffset;
    if (sel.anchorNode.compareDocumentPosition(sel.focusNode) == 2) {
        var anchorNode = sel.focusNode;
        var focusNode = sel.anchorNode;
        let z = startPos;
        startPos = endPos;
        endPos = z;
    } else {
        anchorNode = sel.anchorNode;
        focusNode = sel.focusNode;
    }
    let anchorParentNode = anchorNode.parentNode;
    let focusParentNode = focusNode.parentNode;
    let fakeAnchorNode = anchorParentNode.cloneNode(true);
    let fakeFocusNode = focusParentNode.cloneNode(true);
    if (anchorNode.previousSibling || anchorNode.nextSibling) {
        var fakeAnchorText = anchorNode.textContent;
    } else {
        var fakeAnchorText = fakeAnchorNode.textContent;
    }
    if (focusNode.previousSibling || focusNode.nextSibling) {
        var fakeFocusText = focusNode.textContent;
    } else {
        var fakeFocusText = fakeFocusNode.textContent;
    }
    if (anchorNode.parentNode.nextSibling == focusNode.parentNode.nextSibling) {
        fakeAnchorText = fakeAnchorText.substring(startPos, endPos);
        fakeFocusText = '';
    } else {
        fakeAnchorText = fakeAnchorText.substring(startPos);
        fakeFocusText = fakeFocusText.substring(0, endPos);
    }

    fakeAnchorNode.textContent = fakeAnchorText;
    fakeFocusNode.textContent = fakeFocusText;


    var br = document.createElement("br");
    editor.appendChild(br);
    editor.appendChild(fakeAnchorNode);


    var editorChilds = editor.childNodes;
    var anchorChilds = anchorNode.parentNode.parentNode.childNodes;
    var indexAnchorNode = Array.prototype.indexOf.call(anchorChilds, anchorNode.parentNode);
    var indexFocusNode = Array.prototype.indexOf.call(focusNode.parentNode.parentNode.childNodes, focusNode.parentNode);

    if (indexAnchorNode == indexFocusNode) {} else {
        indexAnchorNode++;
    }

    // }

    while ((Array.prototype.indexOf.call(anchorChilds, anchorChilds[indexAnchorNode]) != indexFocusNode) &&
        (anchorChilds[indexAnchorNode].parentNode != focusNode.parentNode)
    ) {
        editor.appendChild(anchorChilds[indexAnchorNode].cloneNode(true));
        ++indexAnchorNode;
        if (anchorChilds.length == indexAnchorNode) {
            anchorNode = anchorNode.parentNode.parentNode.nextElementSibling;
            anchorChilds = anchorNode.parentNode.childNodes;
            indexAnchorNode = Array.prototype.indexOf.call(editorChilds, anchorNode);

        };

    }


    if (fakeFocusNode.textContent.length == 0) {} else {
        editor.appendChild(fakeFocusNode);
    }

}
