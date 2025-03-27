function solution(array) {
  const answer = [];
  let sortedArray = array.slice().sort((a, b) => b - a);

  for (let i = 0; i < array.length; i++) {
    answer.push(sortedArray.findIndex(v => v === array[i]) + 1);
  }

  return answer;
}

console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([100, 100, 76]));
