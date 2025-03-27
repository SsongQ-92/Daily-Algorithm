function solution(str) {
  let answer = true;
  const convertedStr = str.toUpperCase();

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (convertedStr[i] !== convertedStr[str.length - 1 - i]) {
      return false;
    }
  }

  return answer;
}

console.log(solution("gooG"));
