function solution(str) {
  let answer = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) < 90) {
      answer += String.fromCharCode(letter.charCodeAt(0) + 32);
    } else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) < 122) {
      answer += String.fromCharCode(letter.charCodeAt(0) - 32);
    }
  }

  return answer;
}

console.log(solution("StuDY"));
