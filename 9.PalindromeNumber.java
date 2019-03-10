class Solution {
  public boolean isPalindrome(int x) {
    if (x < 0) {
      return false;
    }

    int inputValue = x;
    int reversed = 0;

    while (x != 0) {
      int temp = reversed * 10 + x % 10;
      if (temp / 10 != reversed) {
        return false;
      }
      reversed = temp;
      x = x / 10;
    }

    return inputValue == reversed;
  }
}