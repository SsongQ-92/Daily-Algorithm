function solution(s, skip, index) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  const validChars = [...alphabet].filter(ch => !skip.includes(ch));
  
  return [...s].map(char => {
    const currentIndex = validChars.indexOf(char);
    const newIndex = (currentIndex + index) % validChars.length;
    return validChars[newIndex];
  }).join('');
}
