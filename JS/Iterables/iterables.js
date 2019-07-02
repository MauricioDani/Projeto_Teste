/*Arrays and strings are most widely used built-in iterables.

For a string, for..of loops over its characters: */
for (let char of "test") {
    // triggers 4 times: once for each character
    alert(char); // t, then e, then s, then t
}

let str = '𝒳😂';
for (let char of str) {
    alert(char); // 𝒳, and then 😂
}

/*We’ll iterate over a string in exactlly the same way as for..of, but with direct calls. This code creates a string iterator and gets values from it “manually”: */

let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}