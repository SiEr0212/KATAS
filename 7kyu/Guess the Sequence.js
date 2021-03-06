/* 
Guess the Sequence

from codewars: https://www.codewars.com/kata/5b45e4b3f41dd36bf9000090/train/javascript

You have read the title: you must guess a sequence. It will have something to do with the number given.

Example
x = 16
result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]

Good luck!
 */
//My solution:

const sequence = (x) => {
  let res = [];
  for (let i = 1; i <= x; i++) res.push(i);
  return res.sort();
};

sequence(16);
//returns: [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]
