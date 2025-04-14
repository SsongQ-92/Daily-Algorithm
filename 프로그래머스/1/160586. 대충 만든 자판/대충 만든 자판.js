function solution(keymap, targets) {
  const charMap = {};

  keymap.forEach(row => {
    [...row].forEach((char, index) => {
      const pressCount = index + 1;
      if (!charMap[char] || charMap[char] > pressCount) {
        charMap[char] = pressCount;
      }
    });
  });

  
  return targets.map(word => {
    let total = 0;
    for (const char of word) {
      if (!charMap[char]) return -1; 
      total += charMap[char];
    }
    return total;
  });
}
