/*
Count Odd Numbers below n

from codewars: https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript

Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!
*/
//My solution:

const oddCount = (n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) count += 1;
  }
  return count;
};

oddCount(15);
//returns: 7
