function solution(str) {
  let stack = [];
  let totalPieces = 0;

  for (let i = 0; i < arrangement.length; i++) {
    const current = arrangement[i];
    const previous = arrangement[i - 1];

    if (current === '(') {
      stack.push('('); 
    } else {
      stack.pop();
      
      if (previous === '(') {
        totalPieces += stack.length;
      } else {
        totalPieces += 1;
      }
    }
  }
  
  return totalPieces;
}

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
