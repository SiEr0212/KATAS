/* 
Strong Number (Special Numbers Series #2) 

from codewars:https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript

Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example: 145, since
1! + 4! + 5! = 1 + 24 + 120 = 145
So, 145 is a Strong number.

Task
Given a number, Find if it is Strong or not.
*/
//My solution:

const strong = (n) => {
  let arr = [...(n + "")].map(Number);
  let res = 0;

  for (let num of arr) {
    if (num === 0 || num === 1) res += 1;
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    res += num;
  }
  return res - 1 === n ? "STRONG!!!!" : "Not Strong !!";
};

strong(145);
