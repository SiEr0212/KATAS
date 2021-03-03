/* 
Rearrange Number to Get its Maximum

from codewars: https://www.codewars.com/kata/563700da1ac8be8f1e0000dc/train/javascript

Create function that takes one positive three digit integer and rearranges its digits to get maximum possible number.
Assume that argument is integer. Return null (nil for ruby) if argument is not valid.

maxRedigit(123); // returns 321
*/
//My solution:

const maxRedigit = (num) => {
  let s = "";
  s += num;
  return num <= 0 || s.length !== 3
    ? null
    : Number(
        s
          .split("")
          .map((el) => Number(el))
          .sort((a, b) => b - a)
          .join("")
      );
};

maxRedigit(123);
//returns: 321
