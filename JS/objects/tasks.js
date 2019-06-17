/* -------------------------------------------------TASK 1----------------------------------------------------------- 
Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.   */

let object = {};

object.name = "John";
object.surname = "Smith";
object.name = "Pete";
delete object.name;

/* -------------------------------------------------TASK 2---------------------------------------------------------- 
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. */

function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

alert(isEmpty(object));

delete object.surname;

alert(isEmpty(object));

/* -------------------------------------------------TASK 3---------------------------------------------------------- 
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0. */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);

/* -------------------------------------------------TASK 4----------------------------------------------------------
Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
For instance:
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  multiplyNumeric(menu);

  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };                        */


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

for (let key in menu) {
    alert(menu[key]);
}

multiplyNumeric(menu);

for (let key in menu) {
    alert(menu[key]);
}


function multiplyNumeric(object) {
    for (let key in object) {
        if (typeof object[key] == "number") {
            object[key] = object[key] * 2
        }
    }
}