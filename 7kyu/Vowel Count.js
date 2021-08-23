/* 
Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
//My Solution:

const getCount = (str) => {
  return str.split("").filter((c) => "aeiou".includes(c)).length;
};

getCount("Sealion"); //returns: 4
