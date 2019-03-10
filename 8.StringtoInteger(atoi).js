var myAtoi = function(str) {
  str = str.trim();

  if (str === null || str.length === 0) {
    return 0;
  }

  let result = 0,
    startIndex = 0,
    isNegative = false;

  if (str[0] === '+') {
    startIndex++;
  } else if (str[0] === '-') {
    startIndex++;
    isNegative = true;
  }

  for (let i = startIndex; i < str.length; i++) {
    if (str.codePointAt(i) < 48 || str.codePointAt(i) > 57) {
      break;
    }

    let digitValue = parseInt(String.fromCodePoint(str.codePointAt(i)));
    result = parseInt(result * 10) + digitValue;

    if (result > 2147483647 && isNegative === false) {
      return 2147483647;
    } else if (result > 2147483648 && isNegative) {
      return -2147483648;
    }
  }

  if (isNegative) {
    result = -result;
  }

  return result;
};