/* -------------------------------------------------TASK 1----------------------------------------------------------
Create an object calculator with three methods: 
    read() prompts for two values and saves them as object properties.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.
*/

let calculator = {
  read() {
    this.x = +prompt("Valor X:", 0);
    this.y = +prompt("Valor Y:", 0);
  },
  sum() {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  },
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/* -------------------------------------------------TASK 2----------------------------------------------------------
There’s a ladder object that allows to go up and down:
    let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep(); // 1
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // shows the current step
    alert(this.step);
    return this;
  }
};

/* -------------------------------------------------TASK 3----------------------------------------------------------
  1. Write a JavaScript program to list the properties of a JavaScript object.*/

let student1 = {
  name: "Mauricio Dani",
  sclass: "CC",
  rollno: 15
};

for (let key in student1) {
  alert(student1[key]);
}
/* -------------------------------------------------TASK 4----------------------------------------------------------
  1. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.*/

let student2 = {
  name: "Mauricio Dani",
  sclass: "CC",
  rollno: 15
};

delete student2.rollno;

/* -------------------------------------------------TASK 5----------------------------------------------------------
3. Write a JavaScript program to get the length of an JavaScript object.*/

let objectLenght = 0;
let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

for (let key in student) {
  objectLenght++;
}
alert(objectLenght);


/* -------------------------------------------------TASK 5----------------------------------------------------------
Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books */

var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }];

displayStatus();

function displayStatus() {
  for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus) {
      console.log(`You already read ${library[i].title} from ${library[i].author}`);
      alert(`You already read ${library[i].title} from ${library[i].author}`);
    } else {
      console.log(`You need to read ${library[i].title} from ${library[i].author}`);
      alert(`You need to read ${library[i].title} from ${library[i].author}`);
    }
  }
}

/* -------------------------------------------------TASK 5----------------------------------------------------------
Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.*/

function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume().toFixed(4));

/* -------------------------------------------------TASK 6----------------------------------------------------------
Create a constructor function Calculator that creates objects with 3 methods:

    read() asks for two values using prompt and remembers them in object properties.
    sum() returns the sum of these properties.
    mul() returns the multiplication product of these properties.*/

let newCalculator = new Calculator();

newCalculator.read();
alert( newCalculator.sum() );
alert( newCalculator.mul() );

function Calculator() {
  this.read = function() {
      this.x = +prompt("x",0);
      this.y = +prompt("y",0);
  };

  this.sum = function() {
    return this.x + this.y ;
  };

  this.mul = function() {
    return this.x * this.y;
  };
}

/* -------------------------------------------------TASK 7----------------------------------------------------------
Create a constructor function Accumulator(startingValue).

Object that it creates should:

    Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
    The read() method should use prompt to read a new number and add it to value.

In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values

*/

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
alert(accumulator.value);

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt("Valor:",0)
  }
}