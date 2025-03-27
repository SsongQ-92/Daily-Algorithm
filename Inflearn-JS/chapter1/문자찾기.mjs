function solution(str, letter) {
  let answer = 0;

  for (let i = 0; i < str.length; i++) {
    if (letter === str[i]) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
