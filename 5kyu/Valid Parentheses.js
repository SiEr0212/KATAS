const validParentheses = (parens) => {
  let queue = [];
  for (let el of parens) {
    if (el === "(") {
      queue.push(el);
    } else if (queue.pop() !== "(") {
      return false;
    }
  }
  return queue.length === 0;
};
const string = "()()";
