//Write a function ucFirst(str) that returns the string str with the uppercased first character
let ucFirst = function (word) {
    if (!word) return word;
    return word[0].toUpperCase() + word.slice(1);
}

console.log(ucFirst("john"));

console.log(ucFirst("john") == "John");

//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

let checkSpam = function (message) {
    let lowerStr = message.toLowerCase();
    if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
        return true;
    }
}
console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam("innocent rabbit") == false);

/*
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"
*/

let truncate = function (str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '...';
    }
    return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));

/* We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

The example:

alert( extractCurrencyValue('$120') === 120 ); // true */

let extractCurrencyValue = function(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));