function longestPalindrome(s: string): number {
    const freq = new Map<string, number>();

    for (const char of s) {
        freq.set(char, (freq.get(char) ?? 0) + 1);
    }

    let length = 0;
    let hasOdd = false;

    for (const count of freq.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOdd = true;
        }
    }

    return hasOdd ? length + 1 : length;
};