/*
Sum without highest and lowest number

from codewars: https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
*/
//My solution:

const sumArray = (array) => {
  return !array || array.length < 4
    ? 0
    : array
        .sort((a, b) => a - b)
        .splice(1, array.length - 2)
        .reduce((a, b) => a + b);
};

sumArray([6, 0, 1, 10, 10]);
//returns: 17
