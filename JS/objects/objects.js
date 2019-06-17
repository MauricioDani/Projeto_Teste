let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,        // by key "age" store value 30
    "likes birds": true, // multiword property name must be quoted
  };

let key = "is male";

alert(user.name);
alert(user.age);

user.isAdmin = true;

alert(user.isAdmin);

delete user.age;

alert(user.age);

// set
user["likes birds"] = false;

// get
alert(user["likes birds"]); // false

// delete
delete user["likes birds"];

// same as user["is male"] = true;
user[key] = true;

/* 
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax 
*/
