function solution(limit, dogsArray) {
  let answer = Number.MIN_SAFE_INTEGER;
  let index = 0;
  let sum = 0;
  const LEN = dogsArray.length;

  function dfs(index, included, sum) {
    if (index === LEN) {
      if (sum <= limit && sum > answer) answer = sum;

      return;
    }

    if (included) {
      dfs(index + 1, true, sum + dogsArray[index]);
      dfs(index + 1, false, sum + dogsArray[index]);
    } else {
      dfs(index + 1, true, sum);
      dfs(index + 1, false, sum);
    }
  }

  dfs(index, true, sum);
  dfs(index, false, sum);

  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));

function teacherSolution(c, arr){
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L, sum){
    if(sum > c) return;
    if(L === n){
      answer = Math.max(answer, sum);
    }
    else{
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }                  
  }

  DFS(0, 0);
  return answer;
}
