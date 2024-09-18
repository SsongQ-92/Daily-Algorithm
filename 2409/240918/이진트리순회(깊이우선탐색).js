/*
DFS => 미로 탐색과 같다

부모 노드
- 왼쪽 자식 = 2n
- 오른쪽 자식 = 2n + 1

전위순회 출력: 부 왼 오
중위순회 출력: 왼 부 오
후위순회 출력: 왼 오 부
*/

function solution(v) {
  let answer = [];

  function dfs(v) {
    if (v > 7) {
      return;
    } else {
      console.log(v); // 전위순회
      dfs(v * 2);
      console.log(v); // 중위순회
      dfs(v * 2 + 1);
      console.log(v); // 후위순회
    }
  }

  dfs(v);
  return answer;
}

console.log(solution(1));