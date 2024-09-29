function solution(array, number) {
  let answer = Number.MAX_SAFE_INTEGER;

  array.sort((a, b) => b - a);

  function dfs(change, count) {
    if (change === 0) {
      answer = Math.min(answer, count);

      return;
    } 
    
    count++;

    for (let i = 0; i < array.length; i++) {
      if (change - array[i] < 0) continue;

      dfs(change - array[i], count);
    }
  }

  dfs(number, 0);

  return answer;
}

console.log(solution([1, 2, 5], 15))

function teacherSolution(m, arr){
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  
  function DFS(L, sum) {
    if (sum > m) return;
    if (L >= answer) return;
    if (sum === m){
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(teacherSolution(15, arr));
