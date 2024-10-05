/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
  let answer = false;
  const permutationArray = [];
  const isIncludedArray = Array.from({ length: s1.length }, ()  => false);

  function makePermutation(index, permutationString, isIncludedArray) {
    if (index === s1.length) {
      permutationArray.push(permutationString);
      return;
    }

    for (let i = 0; i < s1.length; i++) {
      if (isIncludedArray[i]) {
        continue;
      } else {
        const copiedIsIncludedArray = isIncludedArray.slice();
        copiedIsIncludedArray[i] = true;

        makePermutation(index + 1, permutationString + s1[i], copiedIsIncludedArray);
      }
    }
  };

  makePermutation(0, "", isIncludedArray);

  for (let i = 0; i < permutationArray.length; i++) {
    if (s2.includes(permutationArray[i])) {
      answer = true;
      break;
    }
  }

  return answer;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
