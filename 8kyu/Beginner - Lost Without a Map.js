/*  
Beginner - Lost Without a Map

from codewars: https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
*/
//My solution:

const maps = (x) => {
    return x.map((x) => x * 2);
  };