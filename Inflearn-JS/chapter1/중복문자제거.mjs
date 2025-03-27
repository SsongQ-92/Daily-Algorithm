function solution(word) {
  let answer = '';
  const obj = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (obj[letter] === undefined) {
      obj[letter] = 1;
      answer += letter;
    }
  }

  return answer;
}

console.log(solution("ksekkset"));
