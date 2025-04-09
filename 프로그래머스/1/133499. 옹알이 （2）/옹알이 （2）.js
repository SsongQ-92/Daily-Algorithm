function solution(babbling) {
  const canSay = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (const word of babbling) {
    let i = 0;
    let prev = '';
    let isValid = true;

    while (i < word.length) {
      let matched = false;

      for (const say of canSay) {
        if (word.startsWith(say, i)) {
          if (say === prev) {
            isValid = false;
          }
          prev = say;
          i += say.length;
          matched = true;
          break;
        }
      }

      if (!matched) {
        isValid = false;
        break;
      }
    }

    if (isValid) count++;
  }

  return count;
}
