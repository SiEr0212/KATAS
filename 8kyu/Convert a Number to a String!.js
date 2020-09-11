/*
Convert a Number to a String!

from codewars: https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
numberToString(123); // returns '123';   
numberToString(999); // returns '999';
*/

//My solution:

const numberToString = (num) => {
  return JSON.stringify(num);
};

numberToString(67);
//returns '67'
