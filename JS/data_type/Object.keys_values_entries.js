let user = {
    name: "Mauricio",
    age: 28,
}
/*
Object.keys(user) = ["name", "age"]
Object.values(user) = ["Mauricio", 28]
Object.entries(user) = [ ["name","Mauricio"], ["age",28] ]
*/

for (let value of Object.entries(user)) {
    console.log(value);
}


/*__________________________________________________________________________
Sometimes we need to perform a transformation of an object to Map and back.

We already have new Map(Object.entries(obj)) to make a Map from obj.

The syntax of Object.fromEntries does the reverse.*/

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 5],
    ['apple', 3],
]);
console.log(prices.orange);

/*__________________________________________________________________________*/
/*double the Prices*/
let secondPrices = {
    banana: 1,
    orange: 5,
    apple: 3,
};
let doublePrices = {};

for (let [product, price] of Object.entries(secondPrices)) {
    doublePrices[product] = price * 2;
}

console.log(doublePrices.apple);

/*____________________________OR____________________________________________*/
/*double the Prices*/
let thirdPrices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePricesSecond = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(thirdPrices).map(([key, value]) => [key, value * 2])
);

alert(doublePricesSecond.meat); // 8

/* Getting an object from MAP */

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map);

// now obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2