function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const visited = new Set<string>();
    const queue = [[sr, sc]];
    const result = structuredClone(image);

    const findAdjacent = (array: number[]) => {
        const top = [array[0], array[1] + 1];
        const bottom = [array[0], array[1] - 1];
        const left = [array[0] - 1, array[1]];
        const right = [array[0] + 1, array[1]];

        return [top, bottom, left, right];
    }

    while (queue.length > 0) {
        const target = queue.shift();

        if (target && !visited.has(target.toString())) {
            const row = target[0];
            const column = target[1];

            if (image[row][column] === image[sr][sc]) {
                result[row][column] = color;

                const adjacentTargets = findAdjacent(target);

                for (const adjacent of adjacentTargets) {
                    const row = adjacent[0];
                    const column = adjacent[1];

                    const isValidRow = row >= 0 && image.length > row;
                    const isValidColumn = column >= 0 && image[0].length > column;

                    if (isValidRow && isValidColumn && !visited.has(adjacent.toString())) {
                        queue.push(adjacent);
                    }
                }
            }

            visited.add(target.toString());
        }
    }

    return result;
};