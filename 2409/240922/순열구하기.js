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

function teacherSolution(m, arr){         
  let answer = [];
  n = arr.length;

  let ch = Array.from({length: n}, () => 0);
  let tmp = Array.from({length: m}, () => 0);

  function DFS(L) {
      if (L === m) {
        answer.push(tmp.slice()); 
      } else {
        for (let i = 0; i < n; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            tmp[L] = arr[i];
            DFS(L + 1);
            ch[i] = 0;
          }
        }
      }
  }

  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(teacherSolution(2, arr));
