/*
Divisible by previous digit?

from codewars: https://www.codewars.com/kata/5a2809dbe1ce0e07f800004d/train/javascript

Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

The booleans should always start with false becase there is no digit before the first one.

Examples
73312        => [false, false, true, false, true]
2026         => [false, true, false, true]
635          => [false, false, false]
* Remember 0 is evenly divisible by all integers but not the other way around *
*/
//My solution:

const divisibleByLast = (n) => {
  let s = n.toString().split("");
  let res = [];
  for (let i = 0; i < s.length; i++) {
    Number.isInteger(s[i] / s[i - 1]) ? res.push(true) : res.push(false);
  }
  return res;
};

divisibleByLast(73312);
//returns: [false, false, true, false, true]
