function solution(s, t) {
  let answer = 0;
  let tempStr = "";
  const len = t.length;
  const ana = {};

  for (const val of t) {
    ana[val] = (ana[val] ?? 0) + 1;
  }

  const checkAnagram = (str) => {
    const tempAna = { ...ana };

    for (const val of str) {
      if (tempAna[val] === undefined) return;

      tempAna[val] -= 1;
    }

    const isAnagram = Object.values(tempAna).every(v => v === 0);
    if (isAnagram) answer++;
  }

  for (let i = 0; i < len; i++) {
    tempStr += s[i];
  }
  checkAnagram(tempStr);

  for (let i = len; i < s.length; i++) {
    tempStr = tempStr.slice(1) + s[i];

    checkAnagram(tempStr);
  }

  return answer;
}

console.log(solution("bacaAacba", "abc"));
