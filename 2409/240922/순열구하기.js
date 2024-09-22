function solution(m, array) {
  let answer = [];

  function dfs(indexArray, valueArray) {
    if (indexArray.length === m) {
      answer.push(valueArray);

      return;
    } 

    for (let i = 0; i < array.length; i++) {
      if (indexArray.includes(i)) continue;

      const copiedIndexArray = indexArray.slice();
      const copiedValueArray = valueArray.slice();

      copiedIndexArray.push(i);
      copiedValueArray.push(array[i]);

      dfs(copiedIndexArray, copiedValueArray);
    }
  }

  dfs([], []);

  return answer;
}

console.log(solution(2, [3, 6, 9]))
