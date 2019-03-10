var isMatch = function (s, p) {
  const matrix = function (m, n, initial) {
    const arr = [];
    for (let i = 0; i <= m; i++) {
      let row = [];
      for (let j = 0; j <= n; j++) {
        row[j] = initial;
      }
      arr[i] = row;
    }
    return arr;
  }

  const dp = matrix(s.length, p.length, false);
  dp[0][0] = true;

  for (let i = 0; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (j - 1 >= 0 && p[j - 1] === '*') {
        let firstMatch = i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === '.');
        dp[i][j] = firstMatch && dp[i - 1][j] || dp[i][j - 2];
      } else {
        let firstMatch = i > 0 && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
        dp[i][j] = firstMatch && dp[i - 1][j - 1];
      }
    }
  }

  return dp[s.length][p.length];
};