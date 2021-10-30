/* 
Thinking & Testing : How many "word"?

from codwars: https://www.codewars.com/kata/56eff1e64794404a720002d2/train/javascript

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
//My solution:

//NOT PASSING ALL EDGECASES YET!!!!!

const testit = (s) => {
  let res = 0;
  let arr = s
    .toLowerCase()
    .split("")
    .filter((c) => c === "w" || c === "o" || c === "r" || c === "d")
    .join("")
    .split("word");
  for (let amount of arr) {
    amount === "" ? res++ : null;
  }
  return Math.round(res / 2);
};

testit("hello world")//returns: 1
