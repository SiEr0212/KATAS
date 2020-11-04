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
  if (isNaN(number) === true) {
    return `NaN`;
  } else if (number < 0) {
    return number.toString() + ".00";
  } else {
    let s = number.toString();

    let s3 =
      s.split(".")[1].length > 1
        ? s.split(".")[1].substring(0, 2)
        : s.split(".")[1].substring(0, 1) + "0";

    let sx = s.split(".")[0];

    let s1 = sx.substring(sx.length - 6, sx.length - 3);

    let s1a = sx.substring(0, sx.length - 6);

    let s2 = sx.substring(sx.length - 3);

    return sx.length <= 3
      ? s2 + "." + s3
      : sx.length <= 4 || s1a.length == 0
      ? s1 + "," + s2 + "." + s3
      : s1a + "," + s1 + "," + s2 + "." + s3;
  }
};

numberToPrice(1500.129);
// returns :'1,500.12';
