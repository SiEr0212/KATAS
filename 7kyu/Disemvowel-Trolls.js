/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

//My Solution:

const disemvowel = (str) => {
  let newString = "";
  for (let e of str) {
    if (e.toLowerCase() !== 'a' && e.toLowerCase() !== 'e' && e.toLowerCase() !== 'i' && e.toLowerCase() !== 'o' && e.toLowerCase() !== 'u')
      newString += e;
  }
  return newString
}

//another aproach from Codewars

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}

disemvowel("This website is for losers LOL!")
//Returns "Ths wbst s fr lsrs LL!"
