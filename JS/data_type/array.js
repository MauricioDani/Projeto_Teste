/*
A cheat sheet of array methods:

    To add/remove elements:
        push(...items) – adds items to the end,
        pop() – extracts an item from the end,
        shift() – extracts an item from the beginning,
        unshift(...items) – adds items to the beginning.
        splice(pos, deleteCount, ...items) – at index pos delete deleteCount elements and insert items.
        slice(start, end) – creates a new array, copies elements from position start till end (not inclusive) into it.
        concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

    To search among elements:
        indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
        includes(value) – returns true if the array has value, otherwise false.
        find/filter(func) – filter elements through the function, return first/all values that make it return true.
        findIndex is like find, but returns the index instead of a value.

    To iterate over elements:
        forEach(func) – calls func for every element, does not return anything.

    To transform the array:
        map(func) – creates a new array from results of calling func for every element.
        sort(func) – sorts the array in-place, then returns it.
        reverse() – reverses the array in-place, then returns it.
        split/join – convert a string to array and back.
        reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

    Additionally:
        Array.isArray(arr) checks arr for being an array.

Please note that methods sort, reverse and splice modify the array itself.

These methods are the most used ones, they cover 99% of use cases. But there are few others:

    arr.some(fn)/arr.every(fn) checks the array.

    The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

    arr.fill(value, start, end) – fills the array with repeating value from index start to end.

    arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).
 */


//Declaration
let arr = new Array();
let arr2 = [];
let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

/* END of array */
console.log(fruits.length); // 4
console.log(fruits);
console.log(fruits.pop()); // remove "Lemon" and alert it
console.log(fruits); // now ["Apple", "Orange", "Pear"]
console.log(fruits.push("Lemon", "Pineapple")); // now ["Apple", "Orange", "Pear", "Lemon","Pineapple"]
console.log(fruits);
/* BEGINNING of array */

console.log(fruits.shift()); // remove Apple and alert it
console.log(fruits); // now ["Orange", "Pear", "Lemon","Pineapple"]
fruits.unshift('Apple', 'Watermelon');
console.log(fruits); // now ["Apple", "Watermelon", "Orange", "Pear", "Lemon","Pineapple"]

// mix of values
let arr3 = ['Apple', { name: 'John' }, true, function () { alert('hello'); }];
// get the object at index 1 and then show its name
console.log(arr3[1].name); // John
// get the function at index 3 and run it
arr3[3](); // hello

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1]); // the central element

let numberArr = [1, 2, 3];

console.log(arr); // 1,2,3
console.log(String(arr) === '1,2,3'); // true

//Splice
let arrSplice = ["I", "study", "JavaScript"];
arrSplice.splice(1, 1); // from index 1 remove 1 element
console.log(arrSplice); // ["I", "JavaScript"]

let arrSplice2 = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arrSplice2.splice(0, 3, "Let's", "dance");
console.log(arrSplice2) // now ["Let's", "dance", "right", "now"]

let arrSplice3 = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arrSplice3.splice(0, 2);
console.log(removed); // "I", "study" <-- array of removed elements

let arrSplice4 = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arrSplice4.splice(2, 0, "complex", "language");
console.log(arrSplice4); // "I", "study", "complex", "language", "JavaScript"

//The arr.forEach method allows to run a function for every element of the array.
fruits.forEach(function (item, index, array) {
    console.log(`${item} is at index ${index} in ${array}`);
});

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

// search array
let arrSearch = [1, 0, false];
console.log(arrSearch.indexOf(0)); // 1
console.log(arrSearch.indexOf(false)); // 2
console.log(arrSearch.indexOf(null)); // -1
console.log(arrSearch.includes(1)); // true

//Includes
console.log("Includes!");
let arrNan = [NaN];
console.log(arr.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
console.log(arr.includes(NaN));// true (correct)

//FIND
console.log("FIND = item / didn't find = -1 !");
let users1 = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];
let user = users1.find(item => item.id == 1);
console.log(user.name); // John

// FILTER
console.log("FILTER!");
let users2 = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];
// returns array of the first two users
let someUsers = users2.filter(item => item.id < 3);
console.log(someUsers.length); // 2

//MAP
console.log("MAP!");
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

//split and join
console.log("split and join!");
let names = 'Bilbo, Gandalf, Nazgul';

let arrSplit = names.split(', ');

for (let name of arrSplit) {
    console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

let arrJoin = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
console.log(arrJoin); // Bilbo, Gandalf

// Is Array?
console.log("Is Array?");
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

