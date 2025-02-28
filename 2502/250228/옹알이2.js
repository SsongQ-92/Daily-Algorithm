// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
  const words = new Set(["aya", "ye", "woo", "ma"]);
  let count = 0;

  for (const word of babbling) {
    let prev = "";
    let i = 0;

    while (i < word.length) {
      let found = false;

      for (const w of words) {
        if (word.startsWith(w, i)) {
          if (prev === w) break;

          prev = w;
          i += w.length;
          found = true;

          break;
        }
      }

      if (!found) break;
    }

    if (i === word.length) count++;
  }

  return count;
}
