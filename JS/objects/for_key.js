let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
};

for (let key in user) {
    // keys
    alert(key);  // name, age, isAdmin
    // values for the keys
    alert(user[key]); // John, 30, true
}

for (let code in codes) {
    alert(+code); // 49, 41, 44, 1
}



/*
for (key in object) {
    // executes the body for each key among object properties
}
*/