function solution(maps) {
    let answer = 0;
    let noRoute = true;
    const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const queue = [[0, 0]];
    const target = [maps.length - 1, maps[0].length - 1];
    
    visited[0][0] = true;
    
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        
        if (x === target[0] && y === target[1]) {
            answer = maps[x][y];
            noRoute = false;
            break;
        }
        
        for (const [dx, dy] of directions) {
            const [nx, ny] = [x + dx, y + dy];
            
            if (nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length && !visited[nx][ny] && maps[nx][ny]) {
                visited[nx][ny] = true;
                maps[nx][ny] = maps[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    
    if (noRoute) {
        answer = -1;
    }
    
    return answer;
}
