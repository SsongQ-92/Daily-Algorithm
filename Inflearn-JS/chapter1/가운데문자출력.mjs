function solution(word) {
  const midIdx = Math.floor(word.length / 2);

  if (word.length % 2 === 1) {
    return word[midIdx];
  } else {
    return `${word[midIdx - 1]}${word[midIdx]}`;
  }
}

console.log(solution("study"));
console.log(solution("good"));
