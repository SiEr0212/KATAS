/*  
Count hte characters

from codewars: https://www.codewars.com/kata/577ad961ae2807182f000c29/train/javascript

The goal of this kata is to write a function that takes two inputs: 
a string and a character. The function will count the number of times that character appears in the string. 
The count is case insensitive.

For example:

countChar("fizzbuzz","z") => 4
countChar("Fancy fifth fly aloof","f") => 5
The character can be any alphanumeric character.

Good luck.
*/
//My solution: NOT YET PASSING ALL EDGECASES!!

const countChar = (string, char) => {
    let score = 0
    char === char.toUppercase ? string.split('').map(c => c === char.toUppercase() ? score ++ : null) : string.toLowerCase().split('').map(c => c === char ? score ++ : null)
    return score
  }

countChar("fizzbuzz", "z")//, 4);