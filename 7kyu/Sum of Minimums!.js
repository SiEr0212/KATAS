/*
Sum of Minimums!

from codewars: https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:

[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
*/
//My solution:

const sumOfMinimums = (arr) => {
  let res = [];
  for (let el of arr) {
    res.push(Math.min(...el));
  }
  return res.reduce((prev, curr) => prev + curr);
};

sumOfMinimums([
  [7, 9, 8, 6, 2],
  [6, 3, 5, 4, 3],
  [5, 8, 7, 4, 5],
]);
//returns: 9
