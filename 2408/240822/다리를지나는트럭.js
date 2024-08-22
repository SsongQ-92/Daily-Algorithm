/**
 *
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583
 *
 * Pseudo Code
 *
 * 1. 다리는 큐 자료구조를 사용하면 될 것 같은데, 다리의 길이가 관건일 것 같다
 * 2. 다리 길이에 따라 다리를 빠져나가는 시간이 결정된다
 * 3. 겍체를 만들어서 각 key(무게)에 이동한 거리에 대한 value를 더해주는 것도 괜찮을 것 같다. 근데 이렇게 하면 트럭의 무게가 동일할 경우, 각 트럭을 key로 구분짓기가 어렵다
 * 4. 그럼 그냥 배열(큐)를 써야하는데, 우선 시간복잡도 신경쓰지말고 풀어보자
 *
 * @param {number} bridge_length 다리 길이
 * @param {number} weight 총 견딜 수 있는 무게
 * @param {number[]} truck_weights 목표 트럭 배열
 * @returns
 */
function solution(bridge_length, weight, truck_weights) {
  let result = 1;
  const REVERSED_TRUCK_WEIGHTS = truck_weights.reverse();
  const THE_NUMBER_OF_TRUCKS = REVERSED_TRUCK_WEIGHTS.length;
  const BRIDGE = [REVERSED_TRUCK_WEIGHTS.pop()];
  const ARRIVED_TRUCKS = [];

  let weightOfBridge = BRIDGE[0];
  let distance = 1;
  let diffArr = [];

  // 초 단위 반복
  while (THE_NUMBER_OF_TRUCKS > ARRIVED_TRUCKS.length) {
    // 총 이동거리가 다리 길이와 같을 때, 다리에서 가장 앞에 있는 트럭을 제거시킨다
    // 다른 트럭과 그 다음에 올 트럭의 합이 weight보다 크지 않으면 그 다음에 올 트럭도 합류시킨다

    // 1. 끝에 다다랐을때, 트럭을 빼서 도착한 트럭에 넣는 과정
    if (distance === bridge_length) {
      const THE_FRONT_TRUCK = BRIDGE.pop();
      ARRIVED_TRUCKS.push(THE_FRONT_TRUCK);
      weightOfBridge -= THE_FRONT_TRUCK;

      // 트럭을 뺐는데도 뒤에 트럭이 남아있는 경우
      if (BRIDGE.length !== 0) distance = distance - diffArr.pop();
      else distance = 0; // 트럭 뺀 후 트럭이 없는 경우
    }

    // 2. 다리에 트럭이 놓여있지만, 다리에 트럭을 더 올릴 수 있는 경우
    if (
      BRIDGE.length > 0 &&
      weightOfBridge +
        REVERSED_TRUCK_WEIGHTS[REVERSED_TRUCK_WEIGHTS.length - 1] <=
        weight &&
      REVERSED_TRUCK_WEIGHTS.length > 0
    ) {
      if (BRIDGE.length === 1) {
        // 다리에 트럭이 하나만 있는 경우,
        diffArr.unshift(distance);
      } else {
        // 다리에 트럭이 둘 이상 있는 경우,
        let diff = distance;
        for (let i = 0; i < diffArr.length; i++) {
          diff = diff - diffArr[diffArr.length - 1 - i];
        }
        diffArr.unshift(diff);
      }
      distance += 1;

      const newTruck = REVERSED_TRUCK_WEIGHTS.pop();
      BRIDGE.unshift(newTruck);
      weightOfBridge += newTruck;
    } else if (BRIDGE.length === 0 && REVERSED_TRUCK_WEIGHTS.length > 0) {
      // 3. 다리가 비어있어서 트럭을 더 추가할 수 있는 경우
      distance += 1;

      const newTruck = REVERSED_TRUCK_WEIGHTS.pop();
      BRIDGE.push(newTruck);
      weightOfBridge += newTruck;
    } else if (BRIDGE.length > 0) {
      // 4. 트럭을 더 추가할 수 없지만 다리에 트럭 또는 트럭들이 있는 경우
      distance += 1;
    }

    result++;
  }

  return result;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
