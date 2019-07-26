/*Lexical Environment */

let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

function makeWorker() {
    let name2 = "Pete";

    return function () {
        console.log(name2);
    };
}

let name2 = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show? "Pete" (name where created) or "John" (name where called)?


/*Function Declaration */

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

alert(counter1()); // 0
alert(counter1()); // 1
alert(counter2()); // 0 (independent)


/* CODE BLOCKS */

{
    // do some job with local variables that should not be seen outside

    let message = "Hello";

    alert(message); // Hello
}

alert(message); // Error: message is not defined