/*Turn the user into JSON and then read it back into another variable. */
let user = {
    name: "John Smith",
    age: 35
};

let newUser = JSON.parse(JSON.stringify(user));
console.log(newUser);



/*In simple cases of circular references, we can exclude an offending property from serialization by its name.

But sometimes there are many backreferences. And names may be used both in circular references and normal properties.

Write replacer function to stringify everything, but remove properties that reference meetup: */

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
    //return (key != "" && value == meetup) ? undefined : value;
    return (key != "" && value == meetup) ? undefined : value;
}));

/* result should be:
{
"title":"Conference",
"occupiedBy":[{"name":"John"},{"name":"Alice"}],
"place":{"number":23}
}
*/