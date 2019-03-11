class Solution {
  public int romanToInt(String s) {
    Map<Character, Integer> romans = new HashMap<>();
    romans.put('I', 1);
    romans.put('V', 5);
    romans.put('X', 10);
    romans.put('L', 50);
    romans.put('C', 100);
    romans.put('D', 500);
    romans.put('M', 1000);

    int result = romans.get(s.charAt(0));
    int prev = 0;

    for (int i = 1; i < s.length(); i++) {
      if (romans.get(s.charAt(prev)) < romans.get(s.charAt(i))) {
        result = result - romans.get(s.charAt(prev)) * 2;
      }
      result = result + romans.get(s.charAt(i));
      prev = i;
    }

    return result;
  }
}