function solution(array) {
  let answer = 0;
  let maxSum = 0;
  
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    const stringifiedNum = array[i].toString();

    for (let j = 0; j < stringifiedNum.length; j++) {
      sum += parseInt(stringifiedNum[j]);
    }

    if (maxSum < sum) {
      maxSum = sum;
      answer = array[i];
    } else if (maxSum === sum && answer < array[i]) {
      answer = array[i];
    }
  }

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
