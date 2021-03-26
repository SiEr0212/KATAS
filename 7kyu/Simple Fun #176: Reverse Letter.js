/* 
Simple Fun #176: Reverse Letter

from codewars: https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

Task:
Given a string str, reverse it omitting all non-alphabetic characters.

Example:
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output:
[input] string str

A string consists of lowercase latin letters, digits and symbols.

[output] a string
 */
//My solution:

const reverseLetter = (str) => {
    let res = [];
    for (let char of str) {
      char.toLowerCase() !== char.toUpperCase() ? res.push(char) : null;
    }
    return res.reverse().join("");
  };

  reverseLetter("ultr53o?n"); //,"nortlu")
