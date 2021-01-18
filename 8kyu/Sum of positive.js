/*
Sum of positive

from codewars: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/
//My solution:

//with reduce:
const positiveSum = (arr) => {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

//with a for of loop:
const positiveSum = (arr) => {
    let res = 0;
    for (let num of arr) {
      num > 0 ? (res += num) : null;
    }
    return res;
  };

