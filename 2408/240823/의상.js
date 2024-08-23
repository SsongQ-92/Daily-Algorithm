/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 *
 * Pseudo Code
 *
 * 1. 우선 객체에 각 의상 종류별 아이템을 정리한다 => 정리할 때 키 값에 배열을 만들어서 의상의 의름들을 해당 의상 키에 push한다
 * 2. 모든 경우의 수를 담을 배열을 하나 만든다. 어떻게 모든 경우의 수에 대해서 계산을 해야할까?
 * 3. for...in 문을 돌면서 하나의 키에서 하나의 값만 추출해서 담을 수 있도록 해야할까?
 * 4. 근데 그렇게 하면 아이템 종류가 3개 있다고 쳤을 때, 두 개는 입고 하나는 안 입는 상황은 어떻게 계산할 수 있지?
 *
 * GPT 답변
 * 1. 객체(collection)에 의상 종류별로 의상 이름을 배열로 저장: 이 부분은 이미 잘 구현되어 있습니다.
 * 2. 모든 경우의 수를 계산:
 * 2-1. 각 의상 종류별로 해당 종류의 의상을 입을지 안 입을지를 결정할 수 있습니다. 따라서 각 종류별로 (의상 개수 + 1)을 계산합니다. 만약 어느 한 종류의 의상에 개수가 3개 있으면, 입는 경우(1), 입는 경우(2), 입는 경우(#), 안 입는 경우가 있기 때문에
 * 2-2. 이후 모든 경우의 수를 곱하고, 아무것도 입지 않는 경우를 제외하면 됩니다.
 *
 * 결국, 나는 각 의상 종류마다 입을지 안입을지만 결정하면 되기 때문에 각 의상 숫자+1을 해서 각 종류를 다 곱한 다음에, 하나도 안 입는 경우의 수(1) 만 빼주면 된다
 *
 * @param {[string, string][]} clothes
 * @returns
 */
function solution(clothes) {
  let answer = 1;
  const collection = {};

  clothes.forEach((v) => {
    if (!collection[v[1]]) collection[v[1]] = [];

    collection[v[1]].push(v[0]);
  });

  const keyArr = Object.keys(collection);

  for (let i = 0; i < keyArr.length; i++) {
    answer *= collection[keyArr[i]].length + 1;
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
