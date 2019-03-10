var isPalindrome = function (x) {
  if (x == null || x < 0) {
    return false;
  }

  const inputValue = x;
  let reversed = 0;

  while (x !== 0) {
    reversed = reversed * 10 + x % 10;
    x = parseInt(x / 10);
  }

  return inputValue === reversed;
};