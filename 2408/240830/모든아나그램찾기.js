function solution(standardStr, targetStr) {
  let result = 0;
  const targetStrObj = {};

  for (let val of targetStr) {
    targetStrObj[val] = (targetStr[val] ?? 0) + 1;
  }

  for (let i = 0; i < standardStr.length - targetStr.length + 1; i++) {
    const clonedTargetStrObj = { ...targetStrObj };
    const currentWindowArr = [
      standardStr[i],
      standardStr[i + 1],
      standardStr[i + 2],
    ];

    currentWindowArr.forEach((v) => {
      if (!clonedTargetStrObj[v]) return;

      clonedTargetStrObj[v] -= 1;
    });

    const clonedTargetStrObjValues = Object.values(clonedTargetStrObj);
    if (clonedTargetStrObjValues.filter((v) => v !== 0).length === 0) result++;
  }

  return result;
}

console.log(solution("bacaAacba", "abc"));

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solutionTeacher(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
