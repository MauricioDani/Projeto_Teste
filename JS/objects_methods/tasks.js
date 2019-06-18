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

for(let key in student1){
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