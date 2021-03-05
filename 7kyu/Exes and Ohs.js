/* 
Exes and Ohs

from codewars: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
//My solution:

const XO = (str) => {
  let counter = 0;
  for (let char of str.toLowerCase()) {
    if (char === "x") counter += 1;
    if (char === "o") counter -= 1;
  }
  return counter > 0 || counter < 0 ? false : true;
};

XO("ooxXm");
//returns: true
