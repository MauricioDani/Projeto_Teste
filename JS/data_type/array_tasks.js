/*  Create an array styles with items “Jazz” and “Blues”.
    Append “Rock-n-Roll” to the end.
    Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
    Strip off the first value of the array and show it.
    Prepend Rap and Reggae to the array.*/

let style = ["Jazz", "Blues"];
console.log(style);
style.push("Rock-n-Roll");
console.log(style);
console.log(style.length);
style[Math.floor((style.length - 1) / 2)] = "Classics";
console.log(style);
style.shift();
console.log(style);
style.unshift("Rap", "Reggae");
console.log(style);

/*Write the function sumInput() that:

    Asks the user for values using prompt and stores the values in the array.
    Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
    Calculates and returns the sum of array items.

P.S. A zero 0 is a valid number, please don’t stop the input on zero. */

let sumInput = function () {
    let count = 0;
    let arr = [];
    let finalValue = 0;
    while (true) {
        let value = prompt("Informe um valor:");
        if (isFinite(value) && value) {
            arr[count] = value;
            count++;
        } else {
            for (let i = 0; i < arr.length; i++) {
                finalValue += +arr[i];
            }
            return finalValue;
        }
    }
}

console.log(sumInput());


/*The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.*/

let arr = [1, -2, 3, 4, -9, 6];


/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased. */

let camelize = function (str) {
    let strFim = "";
    let arrRet = str.split('-');

    arrRet.forEach(function (item, index, array) {
        strFim += item[0].toUpperCase() + item.slice(1);
    });

    console.log(strFim);
}

camelize('mauricio-cemin-dani');

/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

The function should not modify the array. It should return the new array.
*/

let filterRange = function (arr, a, b) {
    let newArr = [];
    arr.forEach(function (item, index, array) {
        if (item > a && item < b) {
            newArr.push(item);
        }
    });
    console.log(newArr);
    console.log(arr);
}

let arrFilt = [5, 3, 8, 1];

let filtered = filterRange(arrFilt, 1, 4);

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/

let filterRangeInPlace = function (arr, a, b) {
    arr.forEach(function (item, index, array) {
        if (item < a && item > b) {
        } else {
            arr.splice(index, 1);
        }
    });

}

let arrDel = [5, 3, 8, 1, 2, 4];

filterRangeInPlace(arrDel, 1, 4); // removed the numbers except from 1 to 4

console.log(arrDel); // [3, 1, 4]

//Sort in reverse
let arrReverse = [-1, 1, 5, -5, 2, 4, 1, -10, 8];
let arrBackup;

for (let i = 0; i < arrReverse.length; i++) {
    for (let j = 0; j <= i; j++) {
        if (arrReverse[i] > arrReverse[j]) {
            arrBackup = arrReverse[i];
            arrReverse[i] = arrReverse[j];
            arrReverse[j] = arrBackup;
        }
    }
}
console.log(arrReverse);

/*
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );
*/


/*
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
*/
let arrCopySorted = ["HTML", "JavaScript", "CSS"];
let arrBackup2;
let copySorted = function (arr) {
    return arr.slice().sort();
}

arrBackup2 = copySorted(arrCopySorted)

console.log(arrBackup2);
console.log(arrCopySorted);

/*Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

    First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

    Usage example:

    let calc = new Calculator;

    alert( calc.calculate("3 + 7") ); // 10 

    Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

    For instance, let’s add the multiplication *, division / and power **:

    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8*/

let calc = new Calculator();

function Calculator() {
    let methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {
        let arr = str.split(" ");
        return methods[arr[1]](+arr[0], +arr[2])
    }

    this.addMethod = function (name, func) {
        methods[name] = func;
    };
}

console.log(calc.calculate("5 + 9"));

calc.addMethod("*", (a, b) => a * b);

console.log(calc.calculate("5 * 9"));


/* You have an array of user objects, each one has user.name. Write the code that converts it into an array of names. */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = function () {
    let arrNames = [];
    users.forEach(function (item, index, array) {
        arrNames.push(item.name);
    });
    return arrNames;
}

console.log(names()); // John, Pete, Mary


/*You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname. */

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert(usersMapped[0].id) // 1
alert(usersMapped[0].fullName) // John Smith


