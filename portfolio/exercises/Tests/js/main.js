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

    function changeText(tag, lastTag) {
        document.execCommand("insertHTML", false, tag + document.getSelection() + lastTag);
    }

    function changeTextByButton(element, tagName) {
        document.getElementById(element).onclick = function () {
            changeText('<' + tagName + '>', '</' + tagName + '>');
        }
    }

    changeTextByButton("makeA", "a");
    changeTextByButton("makeABBR", "abbr");
    changeTextByButton("makeAddress", "address");
    changeTextByButton("makeArticle", "article");
    changeTextByButton("makeAside", "aside");
    changeTextByButton("makeBDI", "bdi");
    changeTextByButton("makeBDO", "bdo");
    changeTextByButton("makeBlockquote", "blockquote");
    changeTextByButton("makeBold", "B");
    changeTextByButton("makeCaption", "caption");
    changeTextByButton("makeCite", "cite");
    changeTextByButton("makeDD", "dd");
    changeTextByButton("makeDefinition", "dfn");
    changeTextByButton("makeDel", "del");
    changeTextByButton("makeDetails", "details");
    changeTextByButton("makeDL", "dl");
    changeTextByButton("makeDT", "dt");
    changeTextByButton("makeEmphasized", "em");
    changeTextByButton("makeFooter", "footer");
    changeTextByButton("makeHeader", "header");
    changeTextByButton("makeHr", "hr");
    changeTextByButton("makeI", "i");
    changeTextByButton("makeIns", "ins");
    changeTextByButton("makeKBD", "kbd");
    changeTextByButton("makeLi", "li");
    changeTextByButton("makeMark", "mark");
    changeTextByButton("makeOl", "ol");
    changeTextByButton("makeParagraph", "p");
    changeTextByButton("makePre", "pre");
    changeTextByButton("makeQuotation", "q");
    changeTextByButton("makeRp", "rp");
    changeTextByButton("makeRt", "rt");
    changeTextByButton("makeRuby", "ruby");
    changeTextByButton("makeS", "s");
    changeTextByButton("makeSamp", "samp");
    changeTextByButton("makeSmall", "small");
    changeTextByButton("makeSpan", "spans");
    changeTextByButton("makeStrong", "strong");
    changeTextByButton("makeSub", "sub");
    changeTextByButton("makeSummary", "summary");
    changeTextByButton("makeSup", "sup");
    changeTextByButton("makeTable", "table");
    changeTextByButton("makeTbody", "tbody");
    changeTextByButton("makeTD", "td");
    changeTextByButton("makeTfoot", "tfoot");
    changeTextByButton("makeTH", "th");
    changeTextByButton("makeThead", "thead");
    changeTextByButton("makeTime", "time");
    changeTextByButton("makeTR", "tr");
    changeTextByButton("makeU", "u");
    changeTextByButton("makeUl", "ul");
    changeTextByButton("makeVar", "var");
    changeTextByButton("makeWBR", "wbr");


    var a = document.querySelector("a");
    a.setAttribute("href", "#");


});