/*  
Average Score's

from  codewars: https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/javascript

Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. 
You are not allowed to use any loops (including for, for/in, while, and do/while loops).
*/
//My solution:

const average = (scores) => {
  return Math.round(scores.reduce((a, b) => a + b) / scores.length);
};

scores = [49, 3, 5, 300, 7];
average(scores); //returns: 73
