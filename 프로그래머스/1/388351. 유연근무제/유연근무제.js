function solution(schedules, timelogs, startday) {
  let count = 0;

  const toMinutes = (time) => Math.floor(time / 100) * 60 + (time % 100);

  for (let i = 0; i < schedules.length; i++) {
    const limit = toMinutes(schedules[i]) + 10;
    const logs = timelogs[i];
    let late = false;

    for (let j = 0; j < 7; j++) {
      const weekday = (startday + j) % 7;

      if (weekday >= 1 && weekday <= 5) {
        if (toMinutes(logs[j]) > limit) {
          late = true;
          break;
        }
      }
    }

    if (!late) count++;
  }

  return count;
}
