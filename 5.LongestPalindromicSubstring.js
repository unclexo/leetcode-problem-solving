// 'babad'
var longestPalindrome = function (s) {
  if (s === null || s.length <= 1) {
    return s;
  }

  let result = palinStr = reversedStr = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j <= s.lastIndexOf(s[i]); j++) {
      palinStr = palinStr + s[j];
      reversedStr = s[j] + reversedStr;

      if (palinStr === reversedStr) {
        if (palinStr.length > result.length) {
          result = palinStr;
        }
      }
    }

    palinStr = '';
    reversedStr = '';
  }

  return result;
};