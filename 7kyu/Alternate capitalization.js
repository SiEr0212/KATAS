/*  
Alternate capitalization

from codewars: https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
and return as shown below. 
Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 
'See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/
//My solution:

//NOT PASSING ALL EDGECASES YET AND NOT RERACTORED CODE!!!

const capitalize = (s) => {
    let evens = "";
    let odds = "";
    let res = [];
    for (let char of s) {
      s.indexOf(char) % 2 === 0 ? (evens += char.toUpperCase()) : (evens += char);
    }
    res.push(evens);
    for (let even of evens) {
      even === even.toLowerCase() ? (odds += even.toUpperCase()) : (odds += even.toLowerCase());
    }
    res.push(odds);
    return res;
  };

capitalize("abcdef"); //,['AbCdEf', 'aBcDeF']);