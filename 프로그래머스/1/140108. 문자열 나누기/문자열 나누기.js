function solution(s) {
  let count = 0;
  let i = 0;

  while (i < s.length) {
    let x = s[i];
    let same = 1;
    let diff = 0;
    i++;

    while (i < s.length) {
      if (s[i] === x) {
        same++;
      } else {
        diff++;
      }
      i++;

      if (same === diff) break;
    }

    count++;
  }

  return count;
}
