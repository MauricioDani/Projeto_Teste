let str = "Hello";
let n = 1.23456;
let num = Number("123"); // convert a string to number
let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
let numbers = 12.34;

alert( Number(numbers.toFixed(5)) ); // "12.34000", added zeroes to make exactly 5 digits - user Number to convert to number, from string.

alert( 7.3e9 );  // 7.3 billions (7,300,000,000)
alert( str.toUpperCase() ); // HELLO
alert( n.toFixed(2) ); // 1.23


/*Sometimes isFinite is used to validate whether a string value is a regular number:*/
let numTest = +prompt("Enter a number", '');

// will be true unless you enter Infinity, -Infinity or not a number
alert( isFinite(numTest) );


alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

alert( parseInt('a123') ); // NaN, the first symbol stops the process

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024


/*
To write big numbers:

    Append "e" with the zeroes count to the number. Like: 123e6 is 123 with 6 zeroes.
    A negative number after "e" causes the number to be divided by 1 with given zeroes. That’s for one-millionth or such.

For different numeral systems:

    Can write numbers directly in hex (0x), octal (0o) and binary (0b) systems
    parseInt(str, base) parses an integer from any numeral system with base: 2 ≤ base ≤ 36.
    num.toString(base) converts a number to a string in the numeral system with the given base.

For converting values like 12pt and 100px to a number:

    Use parseInt/parseFloat for the “soft” conversion, which reads a number from a string and then returns the value they could read before the error.

For fractions:

    Round using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision).
    Make sure to remember there’s a loss of precision when working with fractions.

More mathematical functions:

    See the Math object when you need them. The library is very small, but can cover basic needs.


*/