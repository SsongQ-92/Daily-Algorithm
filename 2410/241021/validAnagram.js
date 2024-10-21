/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  
  const map = new Map();
  
  for (let i = 0; i < s.length; i++) {
      const value = map.get(s[i]);
      map.set(s[i], value ? value + 1 : 1);
  }
  
  for (let i = 0; i < t.length; i++) {
      const value = map.get(t[i]);
      if (value === undefined) {
          return false;
      } else {
          map.set(t[i], value - 1);
      } 
  }
  
  const mapValues = Array.from(map.values());
  
  if (mapValues.filter(v => v !== 0).length > 0) {
      return false;
  }
  return true;
};
