/*
Removing Elements

from codewars: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that!
*/
//My solution:

const removeEveryOther = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      i % 2 === 0 ? res.push(arr[i]) : i;
    }
    return res;
  };

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 
//[1, 3, 5, 7, 9]);
