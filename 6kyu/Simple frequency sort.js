/*
Simple frequency sort

from codewars: https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
--we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value
More examples in test cases.

Good luck!
*/
//My solution:

const solve = (arr) => {
  const freq = arr.reduce((r, e) => {
    if (!r[e]) r[e] = 1;
    else r[e]++;
    return r;
  }, {});

  return [...arr].sort((a, b) => {
    return freq[b] - freq[a] || a - b;
  });
};

solve([2, 3, 5, 3, 7, 9, 5, 3, 7]);
//returns: [3,3,3,5,5,7,7,2,9]
