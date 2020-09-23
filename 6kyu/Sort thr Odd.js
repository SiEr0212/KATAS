/*
Sort the Odd

from Codewars: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/
//My Solution:

const sortArray = (array) => {
    const odds = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => (x % 2 ? odds.shift() : x));
  };

sortArray([5, 3, 2, 8, 1, 4]);
//returns: [1, 3, 2, 8, 5, 4])
