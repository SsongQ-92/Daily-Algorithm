function solution(skill, skill_trees) {
  return skill_trees.filter(tree => {
    const filtered = [...tree].filter(char => skill.includes(char)).join('');
    
    return skill.startsWith(filtered);
  }).length;
}
