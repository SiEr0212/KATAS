/*
Sentences should start with capital letters

from codewars: https://www.codewars.com/kata/5bf774a81505a7413400006a/train/javascript

In English, all words at the begining of a sentence should begin with a capital letter.

You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.

For example,

input:

"hello. my name is inigo montoya. you killed my father. prepare to die."

output:

"Hello. My name is inigo montoya. You killed my father. Prepare to die."

You may assume:

there will be no punctuation besides full stops and spaces

all but the last full stop will be followed by a space and at least one word
*/

const fix = (paragraph) => {
  let arr = paragraph.split(". ");
  let arr2 = [];
  for (let s of arr) {
    s = s.charAt(0).toUpperCase() + s.substr(1);
    arr2.push(s);
  }
  return arr2.join(". ");
};

fix("hello. my name is inigo montoya. you killed my father. prepare to die.");
// returns: 'Hello. My name is inigo montoya. You killed my father. Prepare to die.'
