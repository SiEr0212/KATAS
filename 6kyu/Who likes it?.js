/*
Who likes it?
*/
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
