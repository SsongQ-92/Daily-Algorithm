function add(a, b) {
  return a + b;
}

function square(n) {
  return n * n;
}

/**
 * 의사 코드
 *
 * 1. flow 함수를 실행하게되면 순차적으로 함수들을 실행하는 함수를 리턴을 하게 됩니다
 * 2. 그 리턴된 함수에 인자들을 넣어서 호출하면 그 인자를 넘겨 받은 첫번째 함수가 실행이 됩니다
 * 3. 첫번째 함수의 실행이 끝나고 리턴값을 두번째 함수의 인자로 넘겨줍니다
 * 4. 그 후, 두번째 함수의 실행이 끝나고 리턴값을 리턴하고 함수를 종료합니다
 *
 * @param {} functions 함수들이 담긴 배열
 */
function flow(functions) {
  return function (...args) {
    let result;

    for (let i = 0; i < functions.length; i++) {
      if (i === 0) {
        result = functions[i](...args);
      } else {
        result = functions[i](result);
      }
    }

    return result;
  };
}

var addSquare = flow([add, square]);
console.log(addSquare(1, 2)); // => 9
