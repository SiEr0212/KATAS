/* 
Highest Scoring Word

from codewars: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
//My solution::

const high = (x) => {
    let highScore = 0;
    let word = "";
    let wordArr = x.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
      let wordScore = 0;
      let iword = wordArr[i];
      for (let j = 0; j < iword.length; j++) {
        wordScore = wordScore + (iword.charCodeAt(j) - 96);
      }
      if (wordScore > highScore) {
        highScore = wordScore;
        word = iword;
      }
    }
    return word;
  };

  high("aa b"); //, 'aa');