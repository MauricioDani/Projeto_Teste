/*JavaScript provides methods:
JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.*/
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json);
/* JSON-encoded object:
{
"name": "John",
"age": 30,
"isAdmin": false,
"courses": ["html", "css", "js"],
"wife": null
}
*/

/*The full syntax of JSON.stringify is: */
//let jsonFull = JSON.stringify(value, replacer, space);

/*Like toString for string conversion, an object may provide method toJSON for to-JSON conversion. JSON.stringify automatically calls it if available.*/
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

console.log(JSON.stringify(room)); // 23

console.log(JSON.stringify(meetup));


/*JSON.parse
To decode a JSON-string, we need another method named JSON.parse. 
syntax: let value = JSON.parse(str[, reviver]);*/

// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers[1]); // 1

//Or for nested objects:
let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);

console.log(user.friends[1]); // 1

//ERRROS:
//let json = `{
//  name: "John",                     // mistake: property name without quotes
//  "surname": 'Smith',               // mistake: single quotes in value (must be double)
//  'isAdmin': false                  // mistake: single quotes in key (must be double)
//  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
//  "friends": [0,1,2,3]              // here all fine
//}`;


/*REVIVER - Example */
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetupRevive = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log( meetupRevive.date.getDate() ); // now works!