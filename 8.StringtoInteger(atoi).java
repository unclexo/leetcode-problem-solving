class Solution {
  public int myAtoi(String str) {
    str = str.trim();

    if (str == null || str.length() == 0) {
      return 0;
    }

    int start = 0;
    // "result" needs to be double
    double result = 0;
    boolean isNegative = false;

    if (str.charAt(0) == '+') {
      start++;
    } else if (str.charAt(0) == '-') {
      start++;
      isNegative = true;
    }

    for (int i = start; i < str.length(); i++) {
      if (str.charAt(i) < '0' || str.charAt(i) > '9') {
        break;
      }

      // Minus '0' from the ASCII value to get the number
      int digitValue = (int) (str.charAt(i) - '0');
      result = result * 10 + digitValue;
    }

    if (isNegative) {
      result = -result;
    }

    if (result > Integer.MAX_VALUE) {
      return Integer.MAX_VALUE;
    }

    if (result < Integer.MIN_VALUE) {
      return Integer.MIN_VALUE;
    }

    return (int) result;
  }
}