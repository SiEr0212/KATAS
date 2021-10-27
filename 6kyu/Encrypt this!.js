/*  
Encrypt this!

from codewars: https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. 
Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/
//My solution:

const encryptThis = (text) => {
    if (text.length === 1) return `${text.charCodeAt(text)}`;
    let arr = text.split(" ");
    let res = "";
    for (let word of arr) {
      if (word.length === 1) res += word.charCodeAt(word[0]) + " ";
      if (word.length > 1 && word.length < 3)
        res += `${word.charCodeAt(word[0])}${word[1]} `;
      if (word.length >= 3)
        res +=
          word.charCodeAt(word[0]) +
          word.substring(word.length - 1) +
          word.substring(2, word.length - 1) +
          word[1] +
          " ";
    }
    return res.trim();
  };

  encryptThis("A wise old owl lived in an oak"); //returns:"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"