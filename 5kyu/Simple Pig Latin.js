/*
Simple Pig Latin

from codewars:https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
//My solution:

const pigIt = (str) => {
    return str
      .split(" ")
      .map((x) => (/[a-zA-Z]+/.test(x) ? x.slice(1) + x[0] + "ay" : x))
      .join(" ");
  };

pigIt('Pig latin is cool');
//returns: 'igPay atinlay siay oolcay'
