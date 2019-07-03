/*There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0. */

let sumSalaries = function (salaries) {
    sum = 0;
    if (length.salaries <= 0) {
        return 0;
    }
    for (let value of Object.values(salaries)) {
        sum += value;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries)); // 650


/* Write a function count(obj) that returns the number of properties in the object */
let object = {
    name: "Mauricio",
    age: 30,
    sex: "Male",
}

let countObject = function (object) {
    let count = 0;
    for (let value of Object.entries(object)) {
        count++
    }
    return count;
    //OR
    //return Object.keys(object).length;
}


console.log(countObject(object));