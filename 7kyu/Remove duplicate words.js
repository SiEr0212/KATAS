/* 
Remove duplicate words 

Your task is to remove all duplicate words from a string, 
leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/
//My solution:

const removeDuplicateWords = (s) => {
  return Array.from(new Set(s.split(" "))).join(" ");
};

removeDuplicateWords(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
);
//returns: 'alpha beta gamma delta'
