var reverse = function (x) {
  let reversed = 0,
    positiveLimit = Math.pow(2, 31),
    negativeLimit = Math.pow(-2, 31);
  while (x !== 0) {
    let temp = parseInt(reversed * 10) + parseInt(x % 10);
    if (temp > positiveLimit || temp < negativeLimit) {
      return 0;
    }
    reversed = temp;
    x = parseInt(x / 10);
  }

  return reversed;
};