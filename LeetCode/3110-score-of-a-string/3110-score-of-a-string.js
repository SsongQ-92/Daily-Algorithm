/**
 * @param {string} s
 * @return {number}
 */
let scoreOfString = function(s) {
    let result = 0;

    for (let i = 0; i < s.length - 1; i++) {
        const FIRST_LETTER = s.charCodeAt(i);
        const SECOND_LETTER = s.charCodeAt(i + 1);

        const DIFF = Math.abs(FIRST_LETTER - SECOND_LETTER);
        result += DIFF;
    }

    return result;
};