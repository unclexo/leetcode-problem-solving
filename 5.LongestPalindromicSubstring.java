class Solution {
  public String longestPalindrome(String s) {
    int len = s.length();
    if (s == null || len == 0) return s;

    int maxLen = 0;
    boolean[][] palMatrix = new boolean[len][len];

    String longest = "";
    for (int j = 0; j < len; j++) {
      for (int i = 0; i <= j; i++) {
        if (s.charAt(i) == s.charAt(j) && ((j - i <= 2) || palMatrix[i + 1][j - 1])) {
          palMatrix[i][j] = true;
          if (j - i + 1 > maxLen) {
            maxLen = j - i + 1;
            longest = s.substring(i, j + 1);
          }
        }  
      }
    }
    return longest; 
  }
}