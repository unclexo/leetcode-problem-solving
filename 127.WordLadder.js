var ladderLength = function (beginWord, endWord, wordList) {
  const set = new Set(wordList);
  if (set.has(beginWord)) {
    set.delete(beginWord);
  }

  const queue = [];
  const map = new Map();

  queue.push(beginWord);
  map.set(beginWord, 1);

  while (queue.length !== 0) {
    const word = queue.shift();
    const currentLevel = map.get(word);
    for (let i = 0; i < word.length; i++) {
      const wordCount = [...word];
      for (let j = 'a'.charCodeAt(); j < 'z'.charCodeAt(); j++) {
        wordCount[i] = String.fromCodePoint(j);
        const temp = wordCount.join('');
        if (set.has(temp)) {
          if (temp === endWord) {
            return currentLevel + 1;
          }
          map.set(temp, currentLevel + 1);
          queue.push(temp);
          set.delete(temp);
        }
      }
    }
  }

  return 0;
};