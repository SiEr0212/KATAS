const twosDifference = (input) => {
  let res = [];
  
  const inputCopy = [...input].sort((a, b) => b - a);
  
  for (let i = 0; i < input.length; i++) {
    for (let y = 0; y < inputCopy.length; y++) {
      if (input[y] - inputCopy[i] === 2) {
        console.log(inputCopy[i]);
        res.push(input[i]) && res.push(inputCopy[y]);
      }
    }
  }
  let res2 = res.reduce(function (result, value, index, array) {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);

  for (let pairs of res2) {
    pairs.sort((a, b) => a - b);
  }
  return res2;
};
