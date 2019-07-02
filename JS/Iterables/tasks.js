/*Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr. */

let unique = function (arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare, Krishna, :-O


/*Write a function aclean(arr) that returns an array cleaned from anagrams.

From every anagram group should remain only one word, no matter which one. */

let aclean = function(arr) {
    let map = new Map();
    
    for(let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted,word);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


