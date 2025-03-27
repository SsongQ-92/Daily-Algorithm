function solution(arrayA, arrayB) {
  const answer = [];
  
  const checkResult = (A, B) => {
    if ((A === 2 && B === 1) || (A === 3 && B === 2) || (A === 1 && B === 3)) {
      return "A";
    } else if (A === B) {
      return "D";
    } else {
      return "B";
    } 
  }
  
  for (let i = 0; i < arrayA.length; i++) {
    answer.push(checkResult(arrayA[i], arrayB[i]));
  }

  return answer;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
