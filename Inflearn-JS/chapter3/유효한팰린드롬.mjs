function solution(str) {
  let answer = true;
  const isAlphabet = (letter) => {
    if ((letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) || (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)) {
      return true;
    }
  }

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (!isAlphabet(str[i]) && isAlphabet(str[str.length - 1 - i]) || isAlphabet(str[i]) && !isAlphabet(str[str.length - 1 - i])) {
      return false;
    }

    if (isAlphabet(str[i]) && isAlphabet(str[str.length - 1 - i])) {
      if (str[i].toUpperCase() !== str[str.length - 1 - i].toUpperCase()) {
        return false;
      }
    }
  }

  return answer;
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
