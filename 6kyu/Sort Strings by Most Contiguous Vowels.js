/* 
Sort Strings by Most Contiguous Vowels

The goal of this Kata is to write a function that will receive an array of strings as its single argument,
 then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"
When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, 
while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, 
then the strings should remain in the order in which they were found in the orginal array.
 */
//My solution NOT YET FINISHED!!!!!!!!! Not passing edge cases yet:

const sortStringsByVowels = (strings) => {
  let order = [];
  for (let word of strings) {
    let cur = 0;
    let max = 0;
    for (let i = 0; i < word.length; ++i) {
      if ("aeiou".includes(word[i])) {
        cur++;
        if (cur > max) {
          max = cur;
        }
      } else {
        cur = 0;
      }
    }

    order.push(max + word);
  }

  return order.sort((a, b) => {
    return b.localeCompare(a, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  }).map(x => x.substring(1,x.length));
};

sortStringsByVowels(["aa","eee","oo","iiii"]);//["iiii","eee","aa","oo"]);