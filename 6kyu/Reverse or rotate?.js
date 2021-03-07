/* 
Reverse or rotate?

from codewars: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

The input is a string str of digits. 
Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, 
reverse that chunk; otherwise rotate it to the left by one position. 
Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
*/
//My solution:

const revrot = (str, sz) => {
    if (sz <= 0 || str.length === 0) return "";
    if (sz > str.length) return "";
    let res = "";
    res += str.charAt(0);
    for (let i = 1; i < str.length; i++) {
      (i + 1) % sz === 0 ? (res += str[i] + "_") : (res += str[i]);
    }
    let res2 = "";
    let chunks = res.split("_").filter((word) => word.length === sz);
    for (let chunk of chunks) {
      let sum = chunk
        .split("")
        .map(Number)
        .reduce((a, c) => a + c);
      sum % 2 === 0
        ? (res2 += chunk.toString().split("").reverse().join(""))
        : (res2 +=
            chunk.toString().substring(1, chunk.length) +
            chunk.toString().substring(0, 1));
    }
    return res2;
  };
  revrot("563000655734469485", 4); //--> "0365065073456944"