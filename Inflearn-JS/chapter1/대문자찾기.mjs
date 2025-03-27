function solution(str) {
  let answer = 0;
  const isCapital = (letter) => letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) < 90;

  for (let i = 0; i < str.length; i++) {
    if (isCapital(str[i])) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("KoreaTimeGood"));
