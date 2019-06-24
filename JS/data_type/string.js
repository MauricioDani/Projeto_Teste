
console.log('I\'m the Walrus!'); // I'm the Walrus!;
console.log(`I'm the Walrus!`); // I'm the Walrus!
console.log(`The backslash: \\`); // The backslash: \
console.log(`My\n`.length); // 3


for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

let str = `Hello`;

// the first character
alert(str[0]); // H
alert(str.charAt(0)); // H

// the last character
alert(str[str.length - 1]); // o

//Just remember: if (~str.indexOf(...)) reads as “if found”.
let str = "Widget";

if (~str.indexOf("Widget")) {
    alert('Found it!'); // works
}