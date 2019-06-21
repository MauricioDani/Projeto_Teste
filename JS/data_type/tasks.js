/*Create a script that prompts the visitor to enter two numbers and then shows their sum */
let x = +prompt("x", 0);
let y = +prompt("y", 0);

alert(x + y);

/*Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null. */

let readNumber = function () {
    let value = 0;
    while (!isFinite(value = prompt("Enter a numeric value:", value))) {
        alert("Informação inválida!");
    }
    return value;
}

readNumber();

/*The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).*/

let random = function (min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 999));
console.log(random(1, 999));
console.log(random(1, 99));

/*Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.*/

function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(1, 3) );