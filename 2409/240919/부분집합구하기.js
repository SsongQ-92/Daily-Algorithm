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

solution(3)