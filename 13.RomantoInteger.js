var romanToInt = function (s) {
  const romans = new Map();
  romans.set('I', 1);
  romans.set('V', 5);
  romans.set('X', 10);
  romans.set('L', 50);
  romans.set('C', 100);
  romans.set('D', 500);
  romans.set('M', 1000);

  let result = romans.get(s[s.length - 1]);
  for (let i = s.length - 2; i >= 0; i--) {
    if (romans.get(s[i]) >= romans.get(s[i + 1])) {
      result = result + romans.get(s[i]);
    } else {
      result = result - romans.get(s[i]);
    }
  }
  return result;
};