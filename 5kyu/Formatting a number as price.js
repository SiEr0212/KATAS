/*
Formatting a number as price'

from codewars: https://www.codewars.com/kata/5318f00b31b30925fd0001f8/train/javascript

Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number
*/
//My solution, not yet finished!! :

const numberToPrice = (number) => {
  let s = number.toString();
  let s3 = parseFloat(s.split(".")[1].substring(0, 2));
  console.log(s3);
  let sx = s.split(".")[0];
  console.log(sx);
  let s1 = parseFloat(sx.substring(0, sx.length - 3));
  console.log(s1);
  let s2 = parseFloat(sx.substring(sx.length - 3));
  console.log(s2);

  return "" + s1 + "," + s2 + "." + s3;
};

numberToPrice(1500.129);
// returns :'1,500.12';
