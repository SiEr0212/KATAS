/*  
Sum of digits

from codewars:https://www.codewars.com/kata/59cf805aaeb28438fe00001c/train/javascript

It involves implementing a program that sums the digits of a non-negative integer. 
For example, the sum of 3433 digits is 13.

Digits can be a number, a string, or undefined. 
In case of undefined return an empty string ''.

To give you a little more excitement, 
the program will not only write the result of the sum, 
but also write all the sums used: 3 + 4 + 3 + 3 = 13.
*/
//My solution:

const sum = (digits) => {
  if (digits == undefined) return "";
  return (
    digits.toString().split("").join(" + ") +
    " = " +
    digits
      .toString()
      .split("")
      .map((e) => Number(e))
      .reduce((acc, cur) => acc + cur)
  );
};

sum("64323"); //returns: "6 + 4 + 3 + 2 + 3 = 18"
