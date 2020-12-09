/*
Fake Binary

from codewars: https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/
//My solution:

const fakeBin = (x) => {
    let res = [];
    for (let num of [...x]) {
      console.log(num < 5);
      num < 5 ? res.push("0") : res.push("1");
    }
    return res.join("");
  };

