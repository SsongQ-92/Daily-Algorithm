function solution(sample) {
  const stack = [];

  for (const val of sample) {
    if (stack.length === 0) {
      stack.push(val);
      continue;
    } 

    if (stack[stack.length - 1] === "(" && val === ")") {
      stack.pop();
    } else {
      stack.push(val);
    }
  }

  return stack.length ? "NO" : "YES";
}

console.log(solution("(()(()))(()"));
console.log(solution("(())()"));
