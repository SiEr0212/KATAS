/*
Moving Zeros To The End

from codewars: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
//My solution:

const moveZeros = (arr) => {
    let zeros = [];
    let rest = [];
    for (let e of arr) {
      e === 0 ? zeros.push(e) : rest.push(e);
    }
    return rest.concat(zeros);
  };

  moveZeros([6,7,4,3,0,9,0,2]);
  //returns [6,7,4,3,9,2,0,0]
  