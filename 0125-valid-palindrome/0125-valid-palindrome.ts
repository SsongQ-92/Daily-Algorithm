function isPalindrome(s: string): boolean {
    let string = '';

    const removingNonAlphabet = function (letter: string) {
        const isLowerCaseAlphabet = letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
        const isUpperCaseAlphabet = letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;
        const isAlphabet = isLowerCaseAlphabet || isUpperCaseAlphabet;

        if (!isAlphabet) {
            if (Number.isNaN(parseInt(letter))) {
                return '';
            }
        } else {
            letter = letter.toLowerCase();
        }

        return letter;
    }

    for (const letter of s) {
        string += removingNonAlphabet(letter);
    }

    if (string === '') {
        return true;
    }

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
};