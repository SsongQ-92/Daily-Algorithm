function solution(array) {
  const answer = [];
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    if (obj[word] === undefined) {
      obj[word] = 1;
      answer.push(word);
    }
  }

  return answer;
}

console.log(solution(["good", "time", "good", "time", "student"]));
