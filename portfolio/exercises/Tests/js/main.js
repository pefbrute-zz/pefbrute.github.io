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

    $('.editable').each(function () {
        this.contentEditable = true;
    });

    function changeText(tag, lastTag) {
        document.execCommand("insertHTML", false, tag + document.getSelection() + lastTag);
    }

    function changeTextByButton(element, tagName) {
        document.getElementById(element).onclick = function () {
            changeText('<' + tagName + '>', '</' + tagName + '>');
        }
    }

    changeTextByButton("MakeA", "a");
    changeTextByButton("MakeABBR", "abbr");
    changeTextByButton("MakeAddress", "address");
    changeTextByButton("MakeArticle", "article");
    changeTextByButton("MakeAside", "aside");
    changeTextByButton("MakeBDI", "bdi");
    changeTextByButton("MakeBDO", "bdo");
    changeTextByButton("MakeBlockquote", "blockquote");
    changeTextByButton("MakeBold", "B");
    changeTextByButton("MakeCaption", "caption");
    changeTextByButton("MakeCite", "cite");
    changeTextByButton("MakeDD", "dd");
    changeTextByButton("MakeDefinition", "dfn");
    changeTextByButton("MakeDel", "del");
    changeTextByButton("MakeDetails", "details");
    changeTextByButton("MakeDL", "dl");
    changeTextByButton("MakeDT", "dt");
    changeTextByButton("MakeEmphasized", "em");
    changeTextByButton("MakeFooter", "footer");
    changeTextByButton("MakeHeader", "header");
    changeTextByButton("MakeHr", "hr");
    changeTextByButton("MakeI", "i");
    changeTextByButton("MakeIns", "ins");
    changeTextByButton("MakeKBD", "kbd");
    changeTextByButton("MakeLi", "li");
    changeTextByButton("MakeMark", "mark");
    changeTextByButton("MakeOl", "ol");
    changeTextByButton("MakeParagraph", "p");
    changeTextByButton("MakePre", "pre");
    changeTextByButton("MakeQuotation", "q");
    changeTextByButton("MakeRp", "rp");
    changeTextByButton("MakeRt", "rt");
    changeTextByButton("MakeRuby", "ruby");
    changeTextByButton("MakeS", "s");
    changeTextByButton("MakeSamp", "samp");
    changeTextByButton("MakeSmall", "small");
    changeTextByButton("MakeSpan", "spans");
    changeTextByButton("MakeStrong", "strong");
    changeTextByButton("MakeSub", "sub");
    changeTextByButton("MakeSummary", "summary");
    changeTextByButton("MakeSup", "sup");
    changeTextByButton("MakeTable", "table");
    changeTextByButton("MakeTbody", "tbody");
    changeTextByButton("MakeTD", "td");
    changeTextByButton("MakeTfoot", "tfoot");
    changeTextByButton("MakeTH", "th");
    changeTextByButton("MakeThead", "thead");
    changeTextByButton("MakeTime", "time");
    changeTextByButton("MakeTR", "tr");
    changeTextByButton("MakeU", "u");
    changeTextByButton("MakeUl", "ul");
    changeTextByButton("MakeVar", "var");
    changeTextByButton("MakeWBR", "wbr");


    var a = document.querySelector("a");
    a.setAttribute("href", "#");


});