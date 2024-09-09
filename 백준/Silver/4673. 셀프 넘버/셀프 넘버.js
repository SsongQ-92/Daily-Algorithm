let answer = ``;

const arr = Array(10000).fill(null).map((_, index) => index + 1);

for (let i = 1; i <= 10000; i++) {
  let number = i;
  let strNumber = number.toString();
  
  for (const val of strNumber) {
    number += Number(val);
  }

  arr[number - 1] = null;
}

const selfArray = arr.filter(v => v !== null);

for (const val of selfArray) {
  answer += `${val}` + `\n`;
}

console.log(answer);
