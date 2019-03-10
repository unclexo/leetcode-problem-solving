class Solution {
  public boolean isMatch(String s, String p) {
    boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];
    dp[0][0] = true;

    for (int i = 0; i <= s.length(); i++) {
      for (int j = 1; j <= p.length(); j++) {
        if (j - 1 >= 0 && p.charAt(j - 1) == '*') {
          boolean firstMatch = i > 0 && (s.charAt(i - 1) == p.charAt(j - 2) || p.charAt(j - 2) == '.');
          dp[i][j] = firstMatch && dp[i - 1][j] || dp[i][j - 2];
        } else {
          boolean firstMatch = i > 0 && (s.charAt(i - 1) == p.charAt(j - 1) || p.charAt(j - 1) == '.');
          dp[i][j] = firstMatch && dp[i - 1][j - 1];
        }
      }
    }

    return dp[s.length()][p.length()];
  }
}