/*
Hells Kitchen

from codewars: https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript

Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', 
Any letter 'a' or 'A' should become '@', 
Any other vowel should become '*'.
*/
//Mu solution: 

onst gordon = (a) => {
    let res = "";
    for (let char of a) {
      if (char.toLowerCase() === "a") {
        res += "@";
      }
      if (
        char.toLowerCase() === "e" ||
        char.toLowerCase() === "i" ||
        char.toLowerCase() === "o" ||
        char.toLowerCase() === "u"
      ) {
        res += "*";
      } else if (char.toLowerCase() !== "a") {
        res += char;
      }
    }
    return res.split(" ").join("!!!! ").toUpperCase() + "!!!!";
  };

  gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!')