/*
Who likes it?

from codewars: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

ou probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
*/
//My solution:

const likes = (names) => {
    const oneName = names.slice(0) + " likes this";
    const twoTo3Names =
      names.slice(0, -1).join(", ") + " and " + names.slice(-1) + " like this";
    const moreThan3Names =
      names.slice(0, 2).join(", ") +
      " and " +
      (names.length - 2) +
      " other like this";
    return names.length == 1
      ? oneName
      : names.length <= 3 && names.length > 1
      ? twoTo3Names
      : names.length > 3
      ? moreThan3Names
      : "no one likes this";
  };

  likes (["Alex", "Jacob", "Mark", "Max"]);
  //returns "Alex, Jacob and 2 others like this"