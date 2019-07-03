// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // Ilya
console.log(surname);  // Kantor

//With split (str to Karr)
let [firstName, surname] = "Ilya Kantor".split(' ');


// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(title); // Consul

/*Works with any iterable on the right-side

…Actually, we can use it with any iterable, not only arrays:
*/
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

/*
Assign to anything at the left-side

We can use any “assignables” at the left side.

For instance, an object property:
*/

let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

console.log(user.name); // Ilya 

/*We can use it with destructuring to loop over keys-and-values of an object: */
let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

//…And the same for a map:
let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}

/*If we want not just to get first values, but also to gather all that follows – we can add one more parameter that gets
 “the rest” using three dots "...":*/
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar

// Note that type of `rest` is Array.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

//The Rest Pattern_______________________________________________________________________________________
let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let { title, ...rest } = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100
