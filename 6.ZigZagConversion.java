class Solution {
  public String convert(String s, int numRows) {
    int length = s.length();
    if (numRows > length || numRows <= 1)
      return s;

    int count = 0;
    int interval = 2 * numRows - 2;
    char[] zigZagChars = new char[length];

    for (int i = 0; i < numRows; i++) {
      int step = interval - 2 * i;
      for (int j = i; j < length; j += interval) {
        zigZagChars[count++] = s.charAt(j);
        if (step > 0 && step < interval && j + step < length) {
          zigZagChars[count++] = s.charAt(j + step);
        }
      }
    }

    return new String(zigZagChars);
  }
}