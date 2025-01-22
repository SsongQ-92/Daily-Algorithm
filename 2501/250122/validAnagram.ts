// https://leetcode.com/problems/valid-anagram/description/

function isAnagram(s: string, t: string): boolean {
  const dictionary = new Map<string, number>();

  for (const letter of s) {
    dictionary.set(letter, (dictionary.get(letter) ?? 0) + 1);
  }

  for (const letter of t) {
    const count = dictionary.get(letter);

    if (!count) return false;

    dictionary.set(letter, count - 1);
  }

  return [...dictionary.values()].every(value => value === 0);
};

/**
 * 좀 더 효율적으로
 */

function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount: { [key: string]: number } = {};

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of t) {
    if (!charCount[char]) return false; 
    charCount[char]--;
  }

  return true;
}
