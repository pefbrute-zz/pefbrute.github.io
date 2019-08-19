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

    // class Clock
    // // ({template}) 
    // {
    //     constructor(template){
    //         this.template = template;
    //     }
    //     // constructor(timer){
    //     //     this.timer = timer;
    //     // }

    //     render() {
    //         let date = new Date();

    //         let hours = date.getHours();
    //         if (hours < 10) hours = '0' + hours;

    //         let mins = date.getMinutes();
    //         if (mins < 10) mins = '0' + mins;

    //         let secs = date.getSeconds();
    //         if (secs < 10) secs = '0' + secs;

    //         let output = template
    //             .replace('t', hours)
    //             .replace('e', mins)
    //             .replace('st', secs);

    //         console.log(output);
    //     }

    //     stop(){
    //         clearInterval(timer);
    //     };

    //     start() {
    //         this.render();
    //         timer = setInterval(render, 1000);
    //     };

    // }

    // let myClock = new Clock({
    //     template: 't:e:st'
    // });
    // myClock.start();

    /*STARTS CLASSES*/
    //Class Syntax
    class MyClass {
        constructor(quantity, quality) {
            this.quantity = quantity;
            this.quality = quality;
        }
        method1() {

        }
        method2() {

        }
        method3() {

        }

    }


    //Class Example 1
    class ClassCar {
        drive() {
            console.log('Vroom!');
        }
    }

    const car1 = new ClassCar();
    console.log(car1.drive());
    /*ENDS Classes*/

    /*STARTS Constructors*/
    //Constructor Syntax
    function construct(prop1, prop2, prop3, prop4, prop5) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this.prop3 = prop3;
        this.prop4 = prop4;
        this.prop5 = prop5;
    }
    var c = new construct(1, "Ηello", true, null, {
        smth: 3
    });
    console.log(c);


    //Constructor Example 1
    function ConstructorCar() {}

    ConstructorCar.prototype.drive = function () {
        console.log('Vroom!');
    };

    const car2 = new ConstructorCar();
    console.log(car2.drive());
    /*ENDS Constructors*/

    /*STARTS Factory Functions*/
    //Factory Function Syntax
    //Factory Functions Causes Less Bugs and more safer
    function Smth() {
        var self = {
            someProperty1: 'Property1',
            someProperty2: 'Property2',
            someProperty3: 'Property3',
            someMethod: function (argument) {
                self.someProperty1 = argument;
            }
        };
        return self;
    }
    var smth1 = Smth(); //It Doesn't Require new Keyword for creating object.
    console.log(smth1.someProperty1);
    smth1.someMethod('Property1111111111');
    console.log(smth1.someProperty1);


    //Factory Function Example 1
    const proto = {
        drive() {
            return 'Some Sound';
        }
    };

    function factoryCar() {
        return Object.create(proto);
    }
    const car = factoryCar();
    console.log(car.drive());


    //Factory Function Example 2
    function createRectangle(lenght, width) {
        return {
            lenght,
            width,
            area() {
                return lenght * width;
            }
        };
    }
    const rectangle1 = createRectangle(2, 5);
    console.log(rectangle1.area());


    //Factory Function Example 3
    function thing() {
        return {
            angles: 3,
            size: "XLL",
            f: function () {},
            g: function () {}
        };
    }
    var smth = thing();
    console.log(smth.angles);
    /*ENDS Factory Functions*/

    //STARTS Getters & Setters
    const someWord = {
        firstWord: 'Smth',
        secondWord: 'And',
        lastWord: 'Smth',
        get fullWord() {
            return `${this.firstWord} ${this.secondWord} ${this.lastWord}`;
        },
        set fullWord(word) {
            let words = word.toString().split(' ');
            this.firstWord = words[0] || '';
            this.secondWord = words[1] || '';
            this.lastWord = words[2] || '';
        }
    };
    Object.defineProperty(someWord, "lastTwoWords", {
        get: function () {
            return `Fullname is:${this.secondWord} ${this.lastWord}`;
        },
        set: function (newLastTwoWords) {
            let lastWords = newLastTwoWords.toString().split(' ');
            this.secondWord = lastWords[0];
            this.lastWord = lastWords[1];
        },
    });
    someWord.fullWord = 'How Are You?';
    console.log(someWord.secondWord);
    console.log(someWord.fullWord);
    console.log(someWord.lastTwoWords);
    //ENDS Getters & Setters

    //STARTS Scopes
    scope1 = function () {
        //"name" is not accessible here
        console.log(name); //Error, because of Lexical Scope
        scope2 = function () {
            let name = 'Fedor';
            console.log(name); // Fedor
            scope3 = function () {
                //"name" is accessible here
                console.log(name); //Fedor
            }
        }
    }

    const counterConstructor = () => {
        let count = 0; //You can't access left variable — it's private variable.
        return () => {
            console.log(count);
            count++;
        };
    };

    const counter = counterConstructor();
    counter(); // 0
    counter(); // 1
    //ENDS Scopes
});