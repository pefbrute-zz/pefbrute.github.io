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


    // function selectAllText(){
    //     sel.removeAllRanges();
    //     var range = document.createRange();
    //     range.setStart(txtInput, 0);
    //     range.setEnd(txtInput, 1);
    //     sel.addRange(range);
    // }

    $('.editable').each(function () {
        this.contentEditable = true;
    });

    // function makeBold() {
    //     let
    //         txtInput,
    //         sel,
    //         startPos,
    //         endPos,
    //         txt,
    //         boldTxt,
    //         range,
    //         wholeTxt,
    //         txtWithBold;
    //     txtInput = document.getElementById("editable-p");
    //     sel = window.getSelection();
    //     if (sel.anchorOffset != sel.focusOffset) {
    //         console.log(sel.anchorOffset, sel.focusOffset);
    //         txt = sel.toString();
    //         boldTxt = txt.bold();
    //         startPos = sel.anchorOffset;
    //         endPos = sel.focusOffset;
    //         if (startPos > endPos) {
    //             startPos = endPos;
    //         }
    //         console.log(sel.anchorOffset, sel.focusOffset);
    //         sel.deleteFromDocument();
    //         sel.removeAllRanges();
    //         range = document.createRange();
    //         range.setStart(txtInput, 0);
    //         range.setEnd(txtInput, 1);
    //         sel.addRange(range);
    //         wholeTxt = sel.toString();
    //         console.log(
    //             // sel, ' ',
    //             txt, ' ',
    //             boldTxt, ' ',
    //             startPos, ' ',
    //             endPos
    //         )
    //         // wholeTxt.slice(0, startPos) + boldTxt + wholeTxt.slice(startPos + Math.abs(0));
    //         txtWithBold = wholeTxt.substr(0, startPos) + boldTxt + wholeTxt.substr(startPos);
    //         // window.getSelection().getRangeAt(0).deleteContents();

    //         txtInput.innerHTML = '';
    //         txtInput.innerHTML = txtWithBold;
    //     }
    //     else{
    //         window.alert('You selected nothing — select something');
    //     }

    // };
    // function changeText(tag) {
    //     document.execCommand(tag);
    // }
    function changeText(tag, lastTag) {
        document.execCommand("insertHTML", false, tag + document.getSelection() + lastTag);
    }

    function changeTextByButton(element, tagName) {
        document.getElementById(element).onclick = function () {
            changeText('<' + tagName + '>', '</' + tagName + '>');
        }
    }

    changeTextByButton("MakeBold", "B");
    changeTextByButton("MakeEmphasized", "em");
    changeTextByButton("MakeParagraph", "p");
    changeTextByButton("MakeSub", "sub");
    changeTextByButton("MakeSup", "sup");
    changeTextByButton("MakeTime", "time");
    changeTextByButton("MakeDel", "del");
    changeTextByButton("MakeCite", "cite");
    changeTextByButton("MakeAddress", "address");
    changeTextByButton("MakeWBR", "wbr");
    changeTextByButton("MakeRuby", "ruby");
    changeTextByButton("MakeRt", "rt");
    changeTextByButton("MakeRp", "rp");
    changeTextByButton("MakeQuotation", "q");
    changeTextByButton("MakeHr", "hr");
    changeTextByButton("MakeDefinition", "dfn");
    changeTextByButton("MakeOl", "ol");
    changeTextByButton("MakeUl", "ul");
    changeTextByButton("MakeLi", "li");
    changeTextByButton("MakeKBD", "kbd");
    changeTextByButton("MakeSamp", "samp");
    changeTextByButton("MakePre", "pre");
    changeTextByButton("MakeMark", "mark");
    changeTextByButton("MakeDetails", "details");
    changeTextByButton("MakeAside", "aside");
    changeTextByButton("MakeIns", "ins");

    //Element.setAttribute(name,value);

});