/*
Character with longest consecutive repetition

form codewars: https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
Happy coding! :)
*/
//My solution:

const longestRepetition = (s) => {
    if(s==='') return ["", 0]
    let result = [null, 0];
    for (let i = 0; i < s.length; null) {
      let start = i++;
      while (i < s.length && s[i] === s[start]) i++;
      if (i - start > result[1]) result = [s[start], i - start];
    }
    return result;
  };

  longestRepetition("aaaabb"); 
  //returns: ["a",4] 