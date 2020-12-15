/*
Filling an array (part 1)

from codewars: https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
*/
//My solution:

const arr = (N) => {
  return typeof N !== "undefined" ? [...Array(N).keys()] : [];
};

arr(4);
//returns: [0,1,2,3]
