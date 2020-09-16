/*
Split Strings

from Codewars: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

//My solution:
const solution = (str) => {
  let pairs = [];
  for (let i = 0, charsLength = str.length; i < charsLength; i += 2) {
    pairs.push(str.substring(i, i + 2));
  }
  return pairs.map((v) => (v.length === 1 ? v + "_" : v));
};

solution("abcdefg");
// returns ["ab", "cd", "ef", "g_"]);
