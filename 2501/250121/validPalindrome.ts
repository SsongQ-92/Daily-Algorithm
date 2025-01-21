// https://leetcode.com/problems/valid-palindrome/description/

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

/**
 * 또 다른 방법
 * 
 * 문자열에 매번 더하지 말고, 배열에 추가한 뒤 join()하는게 더 빠름
 * 그냥 문자열을 한번만 순회하면서 양 끝을 비교하자
 */

function isPalindrome2(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  const isAlphanumeric = (char: string): boolean => {
    const code = char.charCodeAt(0);

    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  };

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
