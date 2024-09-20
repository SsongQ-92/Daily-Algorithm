function solution(array) {
  let answer = "NO";
  let index = 0;

  const LEN = array.length;

  function dfs(index, isIncluded, noArray, yesArray) {
    if (index === LEN) {
      const sumNoArray = noArray.length ? noArray.reduce((acc, val) => acc + val) : 0;
      const sumYesArray = yesArray.length ? yesArray.reduce((acc, val) => acc + val) : 0;
  
      if (sumNoArray === sumYesArray && sumNoArray !== 0 && sumYesArray !== 0) {
        answer = "YES";
      }

      return;
    }

    if (isIncluded) {
      dfs(index + 1, true, noArray, [...yesArray, array[index]]);
      dfs(index + 1, false, noArray, [...yesArray, array[index]]);
    } else {
      dfs(index + 1, true, [...noArray, array[index]], yesArray);
      dfs(index + 1, false, [...noArray, array[index]], yesArray);
    }
  }

  dfs(index, true, [], []);
  dfs(index, false, [], []);

  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));

function teacherSolution(arr){
  let answer = "NO"
  let flag = 0;

  let total = arr.reduce((a, b)=> a + b, 0);
  let n = arr.length;

  function DFS(L, sum){
    if(flag) return;
    if(L === n){
      if((total - sum) === sum){
        answer = "YES";
        flag = 1;
      }
    } else{
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(teacherSolution([1, 3, 5, 6, 7, 10]));