/* 
Evens times last

from codewars: https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

Given a sequence of integers, return the sum of all the integers that have an even index, 
multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/
 //My solution:

 const evenLast = (numbers) => {
    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
      i % 2 === 0 ? evens.push(numbers[i]) : null;
    }
    return evens.length === 0 ? 0 : evens.reduce((prev, curr) => prev + curr) * numbers.slice(-1)[0];
  };

  evenLast([2, 3, 4, 5])// 30