function solution(fees, records) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  const parkingMap = new Map();

  records.forEach(record => {
    const [time, carNumber, action] = record.split(' ');
    if (!parkingMap.has(carNumber)) {
      parkingMap.set(carNumber, { totalTime: 0, lastInTime: null });
    }

    if (action === 'IN') {
      parkingMap.get(carNumber).lastInTime = time;
    } else {
      const inTime = parkingMap.get(carNumber).lastInTime;
      const duration = getMinutesDiff(inTime, time);
      parkingMap.get(carNumber).totalTime += duration;
      parkingMap.get(carNumber).lastInTime = null;
    }
  });

  for (const [carNumber, { totalTime, lastInTime }] of parkingMap) {
    if (lastInTime !== null) {
      const duration = getMinutesDiff(lastInTime, "23:59");
      parkingMap.get(carNumber).totalTime += duration;
    }
  }

  const result = [...parkingMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([_, { totalTime }]) => calculateFee(totalTime, basicTime, basicFee, unitTime, unitFee));

  return result;
}

function getMinutesDiff(start, end) {
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  return (eh * 60 + em) - (sh * 60 + sm);
}

function calculateFee(totalTime, basicTime, basicFee, unitTime, unitFee) {
  if (totalTime <= basicTime) return basicFee;
  return basicFee + Math.ceil((totalTime - basicTime) / unitTime) * unitFee;
}
