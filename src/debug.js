const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end; i++) { //change < to <=
    result += i;
  }
  return result;
};

const brokenNested = () => {
  let result = '';
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 10; i++) {
      result += `-${j}${i}`; //replace the first i with j
    }
  }
  return result.slice(1);
};

module.exports = {
  brokenLoop,
  brokenNested,
};
