/*
Returning Strings

from codewars: https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

SQL: return results in a column named greeting

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/
//My solution:

const greet = (name) => {
  return `Hello, ${name} how are you doing today?`;
};

greet("Shingles");
//returns: "Hello, Shingles how are you doing today?"
