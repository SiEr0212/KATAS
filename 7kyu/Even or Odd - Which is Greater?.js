/*
Even or Odd - Which is Greater?

from codewars: https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript

Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/
//My solution:

const evenOrOdd = (str) => {
  const sumLetters = (s) => {
    let sum = 0;
    for (let char of s) {
      sum += +char;
    }
    return sum;
  };

  let even = "";

  let odd = "";

  for (let i = 0; i < str.length; i++) {
    str[i] % 2 == 0 ? (even += str[i]) : (odd += str[i]);
  }

  if (sumLetters(even) == sumLetters(odd)) return "Even and Odd are the same";
  return sumLetters(even) > sumLetters(odd)
    ? "Even is greater than Odd"
    : "Odd is greater than Even";
};

evenOrOdd("123");
// returns: 'Odd is greater than Even'
