// https://school.programmers.co.kr/learn/courses/30/lessons/155652?language=javascript

function solution(s, skip, index) {
  const skipSet = new Set(skip);
  const alphabet = [];

  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(97 + i);  
    if (!skipSet.has(char)) alphabet.push(char);
  }

  const len = alphabet.length;
  let result = '';

  for (let char of s) {
    let idx = alphabet.indexOf(char);
    let newIdx = (idx + index) % len;
    result += alphabet[newIdx];
  }

  return result;
}
