/*
Are they the "same"?

from codewars: https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
*/

//My solution:

const comp = (a, b) => {
  if (!a || !b) return false;

  const array1 = JSON.stringify(a.map((num) => num ** 2).sort());
  const array2 = JSON.stringify(b.sort());
  return array1 === array2;
};

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

comp(a1, a2); 


