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

    /*DATE STARTS*/
    function appendLeadingZeroes(n) {
        if (n <= 9) {
            return "0" + n;
        }
        return n
    }

    function showTime() {
        let current_datetime = new Date()
        // console.log(current_datetime.toString());
        let formatted_date =
            appendLeadingZeroes(current_datetime.getMonth() + 1) + "/" +
            appendLeadingZeroes(current_datetime.getDate()) + "/" +
            current_datetime.getFullYear() + " " +
            appendLeadingZeroes(current_datetime.getHours()) + ":" +
            appendLeadingZeroes(current_datetime.getMinutes()) + ":" +
            appendLeadingZeroes(current_datetime.getSeconds());
        document.getElementById("date-heading").innerHTML = `Now is: ${formatted_date}`;
    }

    setInterval(showTime, 960);
    /*DATE ENDS*/

    /*FORMS STARTS*/
    document.getElementById("user-btn").addEventListener("click", alertName);
    document.getElementById("practice-form-input").addEventListener("click", resetSubmit);

    function alertName() {
        let username = window.prompt('Write Your Name: ');
        alert(`Hello ${username}!`);
    }

    function resetSubmit() {
        document.getElementById("frm1").reset();
    }
    /*FORMS STARTS*/

    /*Calculator STARTS */
    function sum(firstNumber, secondNumber) {
        let answer = firstNumber + secondNumber;
        document.getElementById('super-puper-easy-calculator-answer').innerHTML = `Your sum is: ${answer}`;
    }
    var firstNumber = parseInt(prompt('Enter Your First Number'));
    var secondNumber = parseInt(prompt('Enter Your Second Number'));
    sum(firstNumber, secondNumber);
    /*Calculator ENDS */

    // /*Output Object Name STARTS*/
    // document.getElementById("btn-object").addEventListener("click", showName);
    // var testObject = {
    //     name: "Some Name",
    //     showName(){
    //         document.getElementById("object-name-output").innerHTML =  this.name;
    //     }
    // }
    // /*Output Object Name ENDS*/
    function objectForPrototype(name) {
        this.name = name;
        // function outputName(){
        //     alert(this.name);
        // }
    }

    objectForPrototype.prototype.outputName = function (name) {
        alert(this.name);
    }
    const prototypeTest = new objectForPrototype('Fedor');
    prototypeTest.outputName();

    class myClass {
        //Between Class Methods It Doesn't Require Coma.
        constructor(age, firstName) {
            this.age = age;
            this.firstName = firstName;
        }
        showAge(age) {
            alert(this.age);
        }
        showFirstName(firstName) {
            alert(this.firstName);
        }
    }
    testClass = new myClass(13, 'Penya');
    testClass.showAge();
    testClass.showFirstName();

    function Clock({
        template
    }) {

        let timer;

        function render() {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = template
                .replace('t', hours)
                .replace('e', mins)
                .replace('st', secs);

            console.log(output);
        }

        this.stop = function () {
            clearInterval(timer);
        };

        this.start = function () {
            render();
            timer = setInterval(render, 1000);
        };

    }

    let myClock = new Clock({
        template: 't:e:st'
    });
    myClock.start();






});