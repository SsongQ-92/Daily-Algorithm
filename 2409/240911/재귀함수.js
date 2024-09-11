function solution(n) {
  if (n === 0) {
    return;
  } else {
    solution(n - 1);
    console.log(n);
  }
}

console.log(solution(3));

/* 
재귀 함수는 스택을 이용함 (스택 프레임; 콜 스택)
*/

function teacherSolution(n) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }

  DFS(n)
}

teacherSolution(3);