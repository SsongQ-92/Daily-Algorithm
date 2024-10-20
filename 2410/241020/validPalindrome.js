/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  if (s.trim() === "") return true;
  
  function checkAlphanumeric(s) {
      return (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90) || (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122) || !Number.isNaN(Number(s));
  }
  
  const preparedString = s.split("").filter(value => value !== " ").filter(value => checkAlphanumeric(value)).join("").toLowerCase();
  
  let stack = [];
  
  for (let i = preparedString.length - 1; i >= 0; i--) {
      stack.push(preparedString[i]);
  }
  
  if (stack.join("") === preparedString) {
      return true;
  } else {
      return false;
  }
};
