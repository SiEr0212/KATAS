/*  
All Star Code Challenge #14

from codewars: https://www.codewars.com/kata/5864eb8039c5ab9cd400005c/train/javascript

his Kata is intended as a small challenge for my students

All Star Code Challenge #14

Your non-profit company has assigned you the task of calculating some simple statistics on donations. 
You have an array of integers, representing various amounts of donations your company has been given. 
In particular, you're interested in the median value for donations.

The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

Write a function called median() that takes an array of integers as an argument and returns the median of those integers.

Note:
The sorting step is vital

median([33,99,100,30,29,50]) // =>  41.5
median([3,2,1]) // => 2
*/
//My solution:

const median = (array) => {
    let sorted = array.sort((a, b) => a - b);
    let unevenArr = sorted.slice(
      Math.floor(sorted.length / 2) - 1,
      Math.ceil(sorted.length / 2) + 1
    );
    return sorted.length % 2 === 0
      ? unevenArr.reduce((a, b) => a + b, 0) / unevenArr.length
      : sorted[Math.floor(sorted.length / 2)];
  };