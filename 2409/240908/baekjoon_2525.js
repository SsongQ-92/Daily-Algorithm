const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './text.txt'
const [currentTime, duration] = fs.readFileSync(path).toString().trim().split("\n");

const [hour, minute] = currentTime.split(" ").map(Number);
let finishedHour = 0;
let finishedMinute = 0;

const sumMinute = Number(minute) + Number(duration);

if (sumMinute > 59) {
  finishedHour = Number(hour) + Math.floor(sumMinute / 60);
  finishedMinute = sumMinute % 60;

  if (finishedHour > 23) finishedHour -= 24;
} else {
  finishedHour = hour;
  finishedMinute = sumMinute;
}

console.log(`${finishedHour} ${finishedMinute}`);
