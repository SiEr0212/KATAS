/*
Find the odd Int

from codewars: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/
//My solution:

const findOdd = (A) => {
    let report = {};
    A.forEach(function (el) {
      report[el] = report[el] + 1 || 1;
    });
  
    for (let i in report) {
      if (report[i] % 2 != 0) return Number(i);
    }
  };

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
//returns: 5
