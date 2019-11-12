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

    setTimeout(function () {
        var txt = window.getSelection();
        var anchNode = txt.anchorNode;
        var anchOffset = txt.anchorOffset;
        var fcsNode = txt.focusNode;
        var fcsOffset = txt.focusOffset;
        var isCollapsed = txt.isCollapsed;
        var rangeCount = txt.rangeCount;
        var type = txt.type;
        window.alert(
            "AnchorNode: " + anchNode +
            "\n" + "AnchorOffset: " + anchOffset +
            "\n" + "FocusNode: " + fcsNode +
            "\n" + "FocusOffset: " + fcsOffset +
            "\n" + "isCollapsed: " + isCollapsed +
            "\n" + "rangeCount: " + rangeCount +
            "\n" + "type: " + type
        );
    }, 2000);

    //Selection Methods:
    // txt.addRange(1,10);
    // txt.collapse(1);
    // txt.collapseToEnd();
    // txt.collapseToStart();
    // window.alert(txt.containsNode());

    //;
    // }, 2000)

    // setTimeout(function () {
    //     var common_p = document.getElementById('common-p');
    //     window.alert(
    //                 "common_p.nodeName: " + '" ' + common_p.nodeName + ' "'
    //                 + "\n" + "common_p.baseURI:  " + '" ' + common_p.baseURI + ' "'
    //                 + "\n" + "common_p.parentNode: " + '" ' + common_p.parentNode + ' "'
    //                 + "\n" + "common_p.previousSibling: " + '" ' + common_p.previousSibling + ' "'
    //                 + "\n" + "common_p.nextSibling: " + '" ' + common_p.nextSibling + ' "'
    //                 + "\n" + "common_p.childNodes: " + '" ' + common_p.childNodes + ' "'
    //                 + "\n" + "common_p.firstChild: " + '" ' + common_p.firstChild + ' "'
    //                 + "\n" + "common_p.lastChild: " + '" ' + common_p.lastChild + ' "'
    //                 + "\n" + "common_p.isConnected: " + '" ' + common_p.isConnected + ' "'
    //                 + "\n" + "common_p.nodeType: " + '" ' + common_p.nodeType + ' "'
    //                 + "\n" + "common_p.nodeValue: " + '" ' + common_p.nodeValue + ' "'
    //                 + "\n" + "common_p.textContent: " + '" ' + common_p.textContent + ' "'
    //     )
    //     console.log(common_p.childNodes);
    //     console.log(common_p.firstChild);
    //     console.log();
    // }, 2000)

    function makeBold() {
        var txt = window.getSelection();
        txt.deleteFromDocument();
    };

    document.getElementById("MakeB").onclick = function () {
        makeBold()
    };

    $('.editable').each(function () {
        this.contentEditable = true;
    });

    var edit = document.getElementById("editable");
    edit.contentEditable = true;
    setTimeout(function () {
        var text = window.getSelection().toString();
        var boldText = text.bold();
        // const activeTxtarea = document.activeElement;
        // var startPos = activeTxtarea.selectionStart;
        // var endPos = activeTxtarea.selectionEnd;
        // activeTxtarea.slice(startPos,endPos);
        function replaceSelectedText(text) {
            var txtArea = document.getElementById("editable");
            if (txtArea.selectionStart != undefined) {
                var startPos = txtArea.selectionStart;
                var endPos = txtArea.selectionEnd;
                selectedText = txtArea.value.substring(startPos, endPos);
                txtArea.value = txtArea.value.slice(0, startPos) + text + txtArea.value.slice(endPos);
            }
        }
        replaceSelectedText(boldText);
        // window.alert(boldText);
    }, 5000);

    setTimeout(function () {
        // var p = document.getElementsByTagName("p");
        var sel = window.getSelection();
        var txt_node = document.getElementById("p-editable");
        alert(sel.anchorOffset, sel.focusOffset);
    }, 1000)


});