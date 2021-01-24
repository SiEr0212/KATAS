/*
Are arrow functions odd?

from codewara: https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/train/javascript

Time to test your basic knowledge in functions! Return the odds from a list:

odds([1,2,3,4,5]) #=> [1,3,5]
*/
//My solution:

const odds = (values) => {
    return values.filter((v) => v % 2);
  };
