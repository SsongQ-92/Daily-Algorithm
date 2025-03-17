function canConstruct(ransomNote: string, magazine: string): boolean {
    const charCount: Record<string, number> = {};

    for (const char of magazine) {
        charCount[char] = (charCount[char] ?? 0) + 1;
    }

    for (const char of ransomNote) {
        if (charCount[char] === 0 || charCount[char] === undefined) {
            return false;
        }
        charCount[char]--;
    }

    return true;
};