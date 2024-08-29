/**
 * Pseudo Code
 *
 * 해쉬
 * @param {string} str1 첫 번째 단어
 * @param {string} str2 두 번째 단어
 * @returns
 */
function solution(str1, str2) {
  const obj = {};

  for (let letter of str1) {
    obj[letter] = (obj[letter] ?? 0) + 1;
  }

  for (let letter of str2) {
    if (obj[letter]) obj[letter] -= 1;
  }

  if (Object.values(obj).filter((v) => v !== 0).length) return "NO";

  return "YES";
}

console.log(solution("AbaAeCe", "baeeACA"));

/**
 * Map 객체를 이용했다
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {string} "YES" or "NO"
 */
function solutionTeacher(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}
