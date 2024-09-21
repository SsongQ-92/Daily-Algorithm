function solution(array) {
  let answer = Number.MIN_SAFE_INTEGER;

  const limitedTime = array.shift()[1];
  const len = array.length;

  let index = 0;

  function dfs(index, isSolved, score, time) {
    if (index === len) {
      if (score > answer) {
        answer = score;
      }
      
      return;
    }
    
    if (isSolved) {
      if (time + array[index][1] > limitedTime) {
        if (score > answer) {
          answer = score;
        }

        return;
      }
      dfs(index + 1, true, score + array[index][0], time + array[index][1]);
      dfs(index + 1, false, score + array[index][0], time + array[index][1]);
    } else {
      dfs(index + 1, true, score, time);
      dfs(index + 1, false, score, time);
    }
  }

  dfs(index, true, 0, 0);
  dfs(index, false, 0, 0);

  return answer;
}

console.log(solution([[5, 20], [10, 5], [25, 12], [15, 8], [6, 3], [7, 4]]));