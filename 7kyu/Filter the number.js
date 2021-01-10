/*
Filter the number

from codewars: https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

Filter the number
Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, 
can you return the number back to it's original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, 
you have to return all the numbers in that string in the order they occur.
*/
//My solution:

const FilterString = (value) => {
    return Number(value.split("").map(Number).filter(Number.isFinite).join(""));d
  };
  
