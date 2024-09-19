const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const [info, ...arr] = fs.readFileSync(path).toString().trim().split('\n');

const kindOfCoins = arr.map(Number).sort((a, b) => b - a);
let targetMoney = info.split(" ").map(Number)[1];
let usedMoneyNum = 0;

while (targetMoney > 0) {
  for (let i = 0; i < kindOfCoins.length; i++) {
    if (kindOfCoins[i] <= targetMoney) {
      targetMoney -= kindOfCoins[i];
      usedMoneyNum++;
      break;
    }
  }
}

console.log(usedMoneyNum);