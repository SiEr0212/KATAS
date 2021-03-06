/*
Convert number to reversed array of digits

from codewars: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/
//My solution:

const digitize = (n) => {
  return (n + "")
    .split("")
    .reverse()
    .map((x) => x * 1);
};

digitize(35231);
//,returns: [1,3,2,5,3];
