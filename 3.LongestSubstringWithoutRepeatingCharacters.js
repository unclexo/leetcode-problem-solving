var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let i = 0,
    j = 0,
    result = 0;
  len = s.length;

  while (i < len && j < len) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      result = Math.max(result, j - i);
    } else {
      set.delete(s[i++]);
    }
  }
  return result;
};