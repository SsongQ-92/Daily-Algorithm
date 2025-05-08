function solution(players, callings) {
  const playerIdx = new Map();

  players.forEach((name, i) => playerIdx.set(name, i));

  for (const name of callings) {
    const curIdx = playerIdx.get(name);
    const prevIdx = curIdx - 1;
    const prevName = players[prevIdx];

    [players[prevIdx], players[curIdx]] = [players[curIdx], players[prevIdx]];

    playerIdx.set(name, prevIdx);
    playerIdx.set(prevName, curIdx);
  }

  return players;
}
