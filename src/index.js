module.exports = function towelSort (matrix) {
  //Protection from empty array and array with one element
  if (!matrix || matrix.length == 0) {
    return [];
  }
  if (matrix.length == 1) {
    return matrix;
  }
  //Important values
  let isReversed = false;
  let result = [];

  matrix.forEach(item => {
    if (isReversed) {
      item.reverse().forEach(i => {
        result.push(i);
      });
      isReversed = false;
    } else {
      item.forEach(i => {
        result.push(i);
      });
      isReversed = true;
    }
  });
  return result;
}
