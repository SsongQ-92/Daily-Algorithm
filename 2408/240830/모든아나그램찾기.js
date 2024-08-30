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
