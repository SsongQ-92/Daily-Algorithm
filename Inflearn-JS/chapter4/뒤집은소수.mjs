function solution(array) {
  let answer = [];
  
  const isPrime = (number) => {
    if (number <= 1) return false;
    if (number === 2 || number === 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
  }

  for (let i = 0; i < array.length; i++) {
    const number = parseInt(array[i].toString().split("").reverse().join(""));

    if (isPrime(number)) {
      answer.push(number);
    }
  }

  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
