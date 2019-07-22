//ARRAYS
/*
When we see "..." in the code, it is either rest parameters or the spread operator.

There’s an easy way to distinguish between them:

    When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
    When ... occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list.

    Use patterns:

    Rest parameters are used to create functions that accept any number of arguments.
    The spread operator is used to pass an array to functions that normally require a list of many arguments.

Together they help to travel between a list and an array of parameters with ease.

All arguments of a function call are also available in “old-style” arguments: array-like iterable object.
*/

function sumAll(...args) { // args is the name for the array
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6


function showName(firstName, lastName, ...titles) {
    console.log(firstName + ' ' + lastName); // Julius Caesar

    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log(titles[0]); // Consul
    console.log(titles[1]); // Imperator
    console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");


/*

For Math.max:

let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

We also can pass multiple iterables this way:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8

We can even combine the spread operator with normal values:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

Also, the spread operator can be used to merge arrays:





let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

In the examples above we used an array to demonstrate the spread operator, but any iterable will do.

For instance, here we use the spread operator to turn the string into array of characters:

let str = "Hello";

alert( [...str] ); // H,e,l,l,o

The spread operator internally uses iterators to gather elements, the same way as for..of does.

So, for a string, for..of returns characters and ...str becomes "H","e","l","l","o". The list of characters is passed to array initializer [...str].

For this particular task we could also use Array.from, because it converts an iterable (like a string) into an array:

let str = "Hello";

// Array.from converts an iterable into an array
alert( Array.from(str) ); // H,e,l,l,o

The result is the same as [...str].

But there’s a subtle difference between Array.from(obj) and [...obj]:

    Array.from operates on both array-likes and iterables.
    The spread operator operates only on iterables.

So, for the task of turning something into an array, Array.from tends to be more universal.

*/