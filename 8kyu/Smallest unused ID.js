/*
from codewars: https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript

Smallest unused ID

Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

const nextId = (ids) => {
  let x = 0;
  while (ids.includes(x)) {
    x++;
  }
  return x;
};

nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// returns 11
