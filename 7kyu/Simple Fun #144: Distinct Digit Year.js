/*
The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

Input/Output

[input] integer year

1000 ≤ year ≤ 9000

[output] an integer

the minimum year number that is strictly larger than the input number year and all its digits are distinct.
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
  for (let i = year + 1; i <= 9999; i++) {
    if (numberIsDistinct(i)) return i;
  }
};

distinctDigitYear(1987)