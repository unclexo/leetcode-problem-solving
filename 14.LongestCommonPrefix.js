var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length === 0) {
    return "";
  }
  let result = strs[0];
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(result) !== 0) {
      result = result.substring(0, result.length - 1);
    }
  }
  return result;
};