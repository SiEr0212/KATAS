/*
Invert values

from codewars: https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/
//My solution:

const invert = (array) =>{
    let res = [];
    for (let num of array) {
      Math.sign(num) === 1 ? res.push(-num) : res.push(Math.abs(num));
    }
    return res;
  };

invert([1, -2, 3, -4, 5]);



