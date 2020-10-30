/*
String ends with?

from codewars: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
//My solution:

const solution = (str, ending) => {
  let index = str.length - ending.length;
  return str.substring(index) == ending;
};

solution("Simon", "mon");
//returns: true
