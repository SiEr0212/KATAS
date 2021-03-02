/* 
Divide and Conquer

from codewars: https://www.codewars.com/kata/57eaec5608fed543d6000021/train/

Given a mixed array of number and string representations of integers, 
add up the string integers and subtract this from the total of the non-string integers.
 */
//My solution:

const divCon = (x) => {
  let num = [];
  let string = [];
  x.forEach((el) => (typeof el === "number" ? num.push(el) : string.push(el)));
  if (num.length === 0) num = [0];
  if (string.length === 0) string = [0];
  return (
    num.reduce((a, c) => a + c) -
    string.map((s) => Number(s)).reduce((a, c) => a + c)
  );
};

divCon([9, 3, "7", "3"]);
//returns: 2
