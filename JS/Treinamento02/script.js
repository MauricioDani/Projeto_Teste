let admin;
let name;
let ourPlanetName = "Earth";
let currentUserName = "John";
let value = true;  
let integerDivision = 5 % 2; //results 1
let counter;
let a;

counter = 1;
a = counter++; //counter = 2  and a = 1
alert(a);
counter = 1;
a = ++counter; //counter = 2 and a = 2
alert(a);

name = "John";
admin = name;

alert(integerDivision);

alert(typeof value); //boolean

value = String(value);
alert(typeof value); //string

alert(admin); //John

//string interpolation
alert(`teste ${1 + 2}`);
