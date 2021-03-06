/*
Unique in Order

from codewars: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

mplement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
//My solution:

const uniqueInOrder = (iterable) => {
  return (Array.isArray(iterable) ? iterable : iterable.split("")).filter(
    (c, i) => c !== iterable[i + 1]
  );
};

uniqueInOrder("AAAABBBCCDAABBB");
//returns: ['A','B','C','D','A','B'])
