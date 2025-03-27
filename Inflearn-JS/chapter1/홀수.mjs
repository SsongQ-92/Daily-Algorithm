function solution(array) {
  const oddArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      oddArray.push(array[i]);
    }
  }

  let total = 0;
  for (let i = 0; i < oddArray.length; i++) {
    total += oddArray[i];
  }

  return [total, Math.min(...oddArray)];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
