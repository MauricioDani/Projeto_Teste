function User(name) {
    this.name = name;
    this.isAdmin = false;
}

new User("Maurício");

/*If we have many lines of code all about creation of a single complex object, we can wrap them in constructor function, like this: */
let user = new function () {
    this.name = "John";
    this.isAdmin = false;

    // ...other code for user creation
    // maybe complex logic and statements
    // local variables etc
};

function User(name) {
    this.name = name;
    this.sayName = function () {
        alert("My name is: " + this.name);
    };
}

let mauricio = new User("Maurício");

mauricio.sayName();