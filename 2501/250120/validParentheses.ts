// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
  const stack: string[] = [];

  const dictionary = new Map();
  dictionary.set(')', '(');
  dictionary.set(']', '[');
  dictionary.set('}', '{');

  for (const letter of s) {
    const LENGTH = stack.length;

    if (LENGTH === 0) {
      stack.push(letter);

      continue;
    }

    if (dictionary.get(letter) === stack[LENGTH - 1]) {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }

  if (stack.length === 0) {
    return true;
  }

  return false;
};

/**
 * 더 깔끔한 버전
 * 
 * 하나라도 다른게 있으면 바로 return 치게끔
 */

function isValid2(s: string): boolean {
  const stack: string[] = [];
  const dictionary: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of s) {
    if (char in dictionary) {
      if (stack.pop() !== dictionary[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

