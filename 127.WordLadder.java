class Solution {
  public int wordLength(String beginWord, String endWord, List<String> wordList) {
    HashSet<String> set = new HashSet<>(wordList);
    if (set.contains(beginWord)) {
      set.remove(beginWord);
    }

    Queue<String> queue = new LinkedList<>();
    HashMap<String, Integer> map = new HashMap<>();

    map.put(beginWord, 1);
    queue.offer(beginWord);

    while (!queue.isEmpty()) {
      String word = queue.poll();
      int currentLevel = map.get(word);
      for (int i = 0; i < word.length(); i++) {
        char[] wordCount = word.toCharArray();
        for (char j = 'a'; j <= 'z'; j++) {
          wordCount[i] = j;
          String temp = new String(wordCount);
          if (set.contains(temp)) {
            if (temp.equals(endWord)) {
              return currentLevel + 1;
            }
            map.put(temp, currentLevel + 1);
            queue.offer(temp);
            set.remove(temp);
          }
        }
      }
    }

    return 0;
  }
}