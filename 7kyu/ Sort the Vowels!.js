/* 
Sort the Vowels!

from codewars: https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/javascript

Sort the Vowels!
In this kata, we want to sort the vowels in a special format.

Task
Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:

List all the Vowels on the right side of |
List every character except Vowels on the left side of |
Return every character in its original case
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
 */
//My solution:

const sortVowels = (s) => {
    if (  s === undefined || s.length === 0 ||s % 1 === 0) return ""
    let res = "";
    for (let char of s) {
      ["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) !== -1
        ? (res += "|" + char + "\n")
        : (res += char + "|" + "\n");
    }
    return res.substring(0,res.length-1);
  };

  sortVowels("Codewars"); //returns: 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');