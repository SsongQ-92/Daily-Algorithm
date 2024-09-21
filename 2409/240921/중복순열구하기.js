function solution(array) {
  let answer = [];

  const maxNum = array[0];
  const canPickupNumber = array[1];
  const numArray = Array.from({length: maxNum}, (_, index) => index + 1);

  function dfs(index, array, level) {
    if (level === maxNum * 2) {
      if (array.length === canPickupNumber) {
        let isIncluded = false;

        answer.forEach(v => {
          if (v.join() === array.join()) isIncluded = true;
        })

        if (!isIncluded) answer.push(array);
      }

      return;
    }

    if (array.length > canPickupNumber) {
      return;
    }

    dfs(index === numArray.length - 1 ? 0 : index + 1, [...array, numArray[index]], level + 1);
    dfs(index === numArray.length - 1 ? 0 : index + 1, array, level + 1);
  }

  dfs(0, [], 0);
  
  answer.push(answer.length);

  return answer;
}

console.log(solution([3, 2]));

function teacherSolution(n, m){
  let answer = [];
  let tmp = Array.from({length: m}, () => 0);

  function DFS(L){
      if(L === m){
        answer.push(tmp.slice());
      } else {
        for(let i = 1; i <= n; i++){
          tmp[L] = i;
          DFS(L + 1);
        }
      }   
  }
  
  DFS(0);
  
  return answer;
}

console.log(teacherSolution(3, 2));