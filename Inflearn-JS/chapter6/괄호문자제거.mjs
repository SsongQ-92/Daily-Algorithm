function solution(sample) {
  const stack = [];

  for (const val of sample) {
    if (stack.includes("(") && val === ")") {
      let letter;

      while (letter !== "(") {
        letter = stack.pop();
      }
    } else {
      stack.push(val);
    }
  }
  
  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
