/* 
Small enough? - Beginner

from codewars:https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

You will be given an array and a limit value. 
You must check that all values in the array are below or equal to the limit value. 
If they are, return true. 
Else, return false.

You can assume all values in the array are numbers.
 */
//My solution:

const smallEnough = (a, limit) => {
  let check = 0;
  for (let el of a) {
    el <= limit ? ++check : --check;
  }
  return check === a.length;
};

smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120); //returns: true
