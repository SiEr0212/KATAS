/*
Reversed Strings

from codewars: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
*/
//My solution:

const solution = (str) => {
  return str.split("").reverse().join("");
};

solution("hello");
//returns: 'olleh'
