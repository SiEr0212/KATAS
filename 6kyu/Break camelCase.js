/*
Break camelCase

from codewars: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/
//My solution:

const solution = (str) => {
    let cleaned = [];
    for (let i = 0; i < str.length; i++) {
      str[i] === str[i].toUpperCase()
        ? cleaned.push(" " + str[i])
        : cleaned.push(str[i]);
    }
    return cleaned.join("");
  };
  
