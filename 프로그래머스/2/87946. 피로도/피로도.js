function solution(k, dungeons) {
    let max = 0;

    const visited = Array(dungeons.length).fill(false);

    function dfs(currentFatigue, count) {
        max = Math.max(max, count);

        for (let i = 0; i < dungeons.length; i++) {
            const [minFatigue, consumeFatigue] = dungeons[i];

            if (!visited[i] && currentFatigue >= minFatigue) {
                visited[i] = true;
                dfs(currentFatigue - consumeFatigue, count + 1);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0);
    return max;
}
