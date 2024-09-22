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
