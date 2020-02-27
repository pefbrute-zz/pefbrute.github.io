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
    console.clear();
    var editor = document.getElementById("editor");
    console.log(editor.getElementsByTagName("*"));
    console.log(editor.querySelector("*"));
    console.log("Child nodes: ", editor.childNodes);
    console.log("Children: ", editor.children);
    let space = function space() {
        editor.appendChild(document.createTextNode(" "));
    }
    var allTxt = editor.textContent;
    var sel = document.getSelection();
    console.log(sel);
    console.log(sel.anchorNode.parentNode);


    var startPos = sel.anchorOffset;
    var endPos = sel.focusOffset;
    // console.log(sel.anchorNode.compareDocumentPosition(sel.focusNode));
    if (sel.anchorNode.compareDocumentPosition(sel.focusNode) == 2) {
        //if (sel.anchorNode.compareDocumentPosition(sel.focusNode) != 4) {
        // let z = sel.anchorNode;
        // sel.anchorNode = sel.focusNode;
        // sel.focusNode = z;
        // console.log(sel.anchorNode);
        // console.log(sel.focusrNode);

        var anchorNode = sel.focusNode;
        var focusNode = sel.anchorNode;
        let z = startPos;
        startPos = endPos;
        endPos = z;

    } else {
        anchorNode = sel.anchorNode;
        focusNode = sel.focusNode;
    }
    // console.log(startPos, ' ', endPos);
    console.log('Anchor:', anchorNode);
    console.log("Anchor's Parent Node:", anchorNode.parentNode);
    console.log('Focus:', focusNode);
    console.log("Focus's Parent Node:", focusNode.parentNode);
    // var range = sel.getRangeAt(0);
    // var ext = range.extractContents();
    // var b = document.createElement("b");
    // b.appendChild(ext);


    // let anchorNode = sel.anchorNode;
    // let focusNode = sel.focusNode;
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    let anchorParentNode = anchorNode.parentNode;
    let focusParentNode = focusNode.parentNode;
    let fakeAnchorNode = anchorParentNode.cloneNode(true);
    let fakeFocusNode = focusParentNode.cloneNode(true);
    // console.log(anchorNode.parentNode == editor....);
    if (anchorNode.previousSibling || anchorNode.nextSibling) {
        var fakeAnchorText = anchorNode.textContent;
        console.log('Anchor is a clear text');
    } else {
        // var fakeAnchorText = fakeAnchorNode.textContent.trim();
        var fakeAnchorText = fakeAnchorNode.textContent;
        console.log(fakeAnchorText);
        console.log("Anchor isn't a clear text");
    }
    if (focusNode.previousSibling || focusNode.nextSibling) {
        var fakeFocusText = focusNode.textContent;
        console.log('Focus is a clear text');
    } else {
        // var fakeFocusText = fakeFocusNode.textContent.trim();
        var fakeFocusText = fakeFocusNode.textContent;
        console.log("Focus isn't a clear text");
    }
    console.log(fakeAnchorNode);
    console.log(fakeFocusNode);
    // let fakeAnchorText = fakeAnchorNode.textContent.trim();
    // let fakeFocusText = fakeFocusNode.textContent;

    // let fakeAnchorLength = fakeAnchorText.length;
    // console.log(fakeAnchorLength);
    // console.log(fakeAnchorText);
    // console.log(fakeFocusText);

    // if (startPos == fakeAnchorLength - 1) {
    //     fakeAnchorText = fakeAnchorText.substring(startPos, fakeAnchorLength - 1);
    // } else {
    //     fakeAnchorText = fakeAnchorText.substring(startPos, fakeAnchorLength);
    // }
    // console.log(sel.anchorNode.nodeName);
    // console.log(anchorNode.parentNode.localName);
    // console.log(anchorNode.parentNode.previousSibling);
    // console.log(anchorNode.nodeType, focusNode.nodeType, '\n',
    //     anchorNode.parentNode.localName,focusNode.parentNode.localName, '\n',
    //     anchorNode.data == focusNode.data, '\n',
    //     anchorNode.parentNode.previousSibling, focusNode.parentNode.previousSibling, '\n',
    //     anchorNode.parentNode.nextSibling, focusNode.parentNode.nextSibling);
    // if (anchorNode.nodeType == focusNode.nodeType &&
    //     anchorNode.parentNode.localName == focusNode.parentNode.localName &&
    //     anchorNode.data == focusNode.data &&
    //     anchorNode.parentNode.previousSibling == focusNode.parentNode.previousSibling &&
    //     anchorNode.parentNode.nextSibling == focusNode.parentNode.nextSibling) {

    if (anchorNode.parentNode.nextSibling == focusNode.parentNode.nextSibling) {
        fakeAnchorText = fakeAnchorText.substring(startPos, endPos);
        fakeFocusText = '';
        console.log('In the same node');
    } else {
        fakeAnchorText = fakeAnchorText.substring(startPos);
        fakeFocusText = fakeFocusText.substring(0, endPos);
        console.log('In different nodes');
    }

    fakeAnchorNode.textContent = fakeAnchorText;
    console.log(fakeAnchorText);
    fakeFocusNode.textContent = fakeFocusText;
    console.log(fakeFocusText);

    var br = document.createElement("br");
    editor.appendChild(br);
    // if (f) {

    // }

    // console.log(" ".trim().length);

    // var b = document.createElement("b");
    editor.appendChild(fakeAnchorNode);

    // space();

    // var nextSibling = anchorParentNode.nextSibling.cloneNode(true);
    // var nextElementSibling = anchorParentNode.nextElementSibling;
    // console.log(nextSibling);
    // console.log(nextElementSibling);
    // console.log(nextSibling.textContent.trim());
    // console.log(nextSibling.nextSibling);
    // if (anchorParentNode.nextSibling == focusParentNode.nextSibling || anchorParentNode.nextElementSibling == focusParentNode) {} else {
    //     if (nextElementSibling == null) {
    //         editor.append(nextSibling);
    //     } else {
    //         editor.append(nextSibling);
    //         editor.append(nextElementSibling.cloneNode(true));
    //     }
    // }

    var editorChilds = editor.childNodes;
    console.log(editorChilds);
    // var fakeAnchorParentNode = anchorParentNode.cloneNode(true);
    // var indexAnchorParentInEditor = Array.prototype.indexOf.call(editorChilds, fakeAnchorParentNode);
    // while (indexAnchorParentInEditor == -1) {
    //     console.log(fakeAnchorParentNode);
    //     fakeAnchorParentNode = fakeAnchorParentNode.parentNode;
    //     indexAnchorParentInEditor = Array.prototype.indexOf.call(editorChilds, fakeAnchorParentNode);
    // };
    //
    // console.log("Index of anchor's parent node in editor: ",indexAnchorParentInEditor);

    var anchorChilds = anchorNode.parentNode.parentNode.childNodes;
    console.log(anchorChilds);
    var indexAnchorNode = Array.prototype.indexOf.call(anchorChilds, anchorNode.parentNode);
    // var indexAnchorNode = Array.prototype.indexOf.call(editor.childNodes, anchorNode.parentNode);


    // if (indexAnchorNode == -1) {
    //     indexAnchorNode =
    // }

    var indexFocusNode = Array.prototype.indexOf.call(focusNode.parentNode.parentNode.childNodes, focusNode.parentNode);
    // var indexFocusNode = Array.prototype.indexOf.call(editor.childNodes, focusNode.parentNode);
    console.log('Index of anchor node: ', indexAnchorNode,
        '\n', 'Index of focus node: ', indexFocusNode);
    //
    // function indexChildNodes (index){
    //     return Array.prototype.indexOf.call(editor.childNodes, editor.childNodes[index]);
    // }
    // indexAnchorNode++;

    // console.log(editor.childNodes[++indexAnchorNode].textContent.trim());
    console.log(indexAnchorNode);
    // if (indexFocusNode - indexAnchorNode == 2 && editor.childNodes[indexAnchorNode++].textContent.trim() == 0) {

    if (indexAnchorNode == indexFocusNode) {} else {
        indexAnchorNode++;
    }
    
    // }

    while ((Array.prototype.indexOf.call(anchorChilds, anchorChilds[indexAnchorNode]) != indexFocusNode) 
            && (anchorChilds[indexAnchorNode].parentNode != focusNode.parentNode)
            ) {
        editor.appendChild(anchorChilds[indexAnchorNode].cloneNode(true));
        console.log(anchorChilds[indexAnchorNode]);
        ++indexAnchorNode;
        if (anchorChilds.length == indexAnchorNode) {
            anchorNode = anchorNode.parentNode.parentNode.nextElementSibling;
            anchorChilds = anchorNode.parentNode.childNodes;
            indexAnchorNode = Array.prototype.indexOf.call(editorChilds, anchorNode);
            console.log(indexAnchorNode);
            console.log(anchorNode);
            // console.log(editorChilds);
            console.log(anchorChilds);
            console.log(anchorNode.parentNode);
            console.log(anchorChilds[indexAnchorNode].parentNode);

        };

    }

    // while (nextSibling != fakeFocusNode) {
    //     if (fakeAnchorNode.nextElementSibling == nextSibling) {
    //         editor.appendChild(fakeAnchorNode.nextElementSibling);
    //     } else {
    //         editor.appendChild(nextSibling);
    //         editor.appendChild(fakeAnchorNode.nextElementSibling);
    //     }
    //     anchorParentNode.nextSibling = anchorParentNode.nextSibling.nextSibling;
    // }

    // while (nextSibling.textContent.trim().length == 0) {
    //     fakeAnchorNode = nextSibling;
    //     console.log(fakeAnchorNode);
    //     nextSibling = fakeAnchorNode.nextSibling;
    //     console.log(nextSibling);
    // }
    if (fakeFocusNode.textContent.length == 0) {} else {
        editor.appendChild(fakeFocusNode);
    }
    // editor.appendChild(fakeFocusNode);
    // editor.appendChild(br);
    // editor.appendChild(b);


    // let AnchorNode = sel.anchorNode.parentNode;
    // let FocusNode = sel.focusNode.parentNode;
    // let AnchorText = AnchorNode.textContent;
    // let FocusText = FocusNode.textContent;

    // AnchorText.substring(0, AnchorText.length - 1);
    // FocusText.substring(0, endPos);
    // editor.appendChild(AnchorNode);

    // var firstB = document.createTextNode("<b>");
    // var lastB = document.createTextNode("</b>");
    // console.log(range.cloneContents());
    // console.log(ext);

    // editor.appendChild(b);
    // editor.appendChild(firstB);
    // editor.appendChild(ext);
    // editor.appendChild(lastB);
}

// })