/* 
All unique

from codewars: https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript

Write a program to determine if a string contains only unique characters.
 Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. 
Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/
//My solution:

const hasUniqueChars = (str) => {
  return new Set(str).size == str.length;
};

hasUniqueChars("abcdef");
//returns: true
