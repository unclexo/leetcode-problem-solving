var convert = function (s, numRows) {
  len = s.length;
  if (numRows > len || numRows <= 1) {
    return s;
  }

  let count = 0,
    interval = 2 * numRows - 2,
    zigZagChars = [];

  for (let i = 0; i < numRows; i++) {
    let step = interval - 2 * i;
    for (let j = i; j < len; j += interval) {
      zigZagChars[count++] = s[j];
      if (step > 0 && step < interval && step < len) {
        zigZagChars[count++] = s[j + step];
      }
    }
  }

  return zigZagChars.join("");
};