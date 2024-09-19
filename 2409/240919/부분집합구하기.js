function solution(v) {
const endNum = v;
let startNum = 1;

  function dfs(startNum, isIncluded, stack) {
    if (startNum > endNum) {
      return;
    };

    const newStack = stack.slice();

    if (isIncluded) {
      newStack.push(startNum);
    }
    
    if (startNum === endNum && newStack.length > 0) {
      console.log(newStack);
    }

    startNum++;

    dfs(startNum, true, newStack);
    dfs(startNum, false, newStack);
  }

  dfs(startNum, true, []);
  dfs(startNum, false, []);
}

solution(3);

function teacherSolution(n) {
  let answer = [];
  let ch = Array.from({length: n + 1}, () => 0);

  function DFS(L) {
    if (L === n + 1){
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += (i + " ");
      }

      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(teacherSolution(3));