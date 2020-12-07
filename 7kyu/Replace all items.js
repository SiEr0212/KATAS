/*
Replace all items

from codewars: https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a/train/javascript

Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

Python / JavaScript: The function has to work for strings and lists.

Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]
*/
//My solution:

const replaceAll = (seq, find, replace) => {
    if (seq.length === 0) return seq;
    let resNumber = [];
    let resString = [];
    for (let els of seq) {
      if (els.length == undefined) {
        els === find ? resNumber.push(replace) : resNumber.push(els);
      } else {
        for (let el of els) {
          el === find ? resString.push(replace) : resString.push(el);
        }
      }
    }
    return resNumber.length > 0 ? resNumber : resString.join("");
  };

  replaceAll([1,2,2], 1, 2);
  // returns: [2,2,2]