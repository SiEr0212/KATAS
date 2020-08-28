/*
Simple Fun #144: Distinct Digit Year

from codewars: https://www.codewars.com/kata/58aa68605aab54a26c0001a6/train/javascript

The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

Input/Output
[input] integer year

1000 ≤ year ≤ 9000

*/

//My solution

const numberIsDistinct = (num) => {
  const str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i], i + 1) !== -1) {
      return false;
    }
  }
  return true;
};

const distinctDigitYear = (year) => {
  for (let i = year + 1; i <= 9000; i++) {
    if (numberIsDistinct(i)) /* is true*/ return i;
  }
};

distinctDigitYear(1987);

