let user = {
    name: "John",
    age: 30,
};

user.sayHi = function () {
    alert("Hello!");
}

user.sayHi();


/* -------------------------------- SAME AS ABOVE --------------------------*/

let user = {
    // ...
};

// first, declare
function sayHi() {
    alert("Hello!");
};

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!


/*-------------------------------- Other Example --------------------------*/
// these objects do the same

user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  // method shorthand looks better, right?
  user = {
    sayHi() { // same as "sayHi: function()"
      alert("Hello");
    }
  };