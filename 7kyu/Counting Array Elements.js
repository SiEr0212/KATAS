/*
Counting Array Elements

from codewars: https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript

Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/
//My solution:

const count = (array) => {
    let report = {};
    array.forEach(function (el) {
      report[el] = report[el] + 1 || 1;
    });
    return report;
  };

count(['a', 'a', 'b', 'b', 'b']);
//returns: { 'a': 2, 'b': 3 })