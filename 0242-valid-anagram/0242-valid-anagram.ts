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