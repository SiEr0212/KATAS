/*
CamelCase Method

from codewars: https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/
//My solution:

const camelCase = (s) => {
  let cleaned = s.trim().split(" ");
  let res = [];
  for (let word of cleaned) {
    res.push(word[0].toUpperCase() + word.substring(1));
  }
  return res.join("");
};

camelCase("camel case method");
//returns: "CamelCaseMethod"
