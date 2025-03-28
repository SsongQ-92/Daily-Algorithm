function solution(exp) {
  const array = exp.split("");

  const isNumber = (str) => {
    return !Number.isNaN(Number(str));
  }

  const operate = (num1, num2, operator) => {
    switch (operator) {
      case "+":
        return Number(num1) + Number(num2);
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return;
    }
  }

  while (array.every(v => isNumber(v)) === false) {
    for (let i = 0; i < array.length; i++) {
      if (isNumber(array[i]) === false) {
        const operator = array[i];

        const result = operate(array[i - 2], array[i - 1], operator);
        array.splice(i - 2, 3, result);

        break;
      }
    }
  }

  return array[0];
}

console.log(solution("352+*9-"));
