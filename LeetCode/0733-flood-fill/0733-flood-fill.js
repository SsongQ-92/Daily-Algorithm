/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, color) {
    const standardColor = image[sr][sc];
    const queue = [[sr, sc]];
    const copiedImage = structuredClone(image);
    
    const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const rowLength = image.length;
    const columnLength = image[0].length;
    const checkVisited = Array.from({ length: rowLength }, () => Array.from({ length: columnLength }).fill(false));

    while(queue.length > 0) {
        const [row, column] = queue.pop();
        
        copiedImage[row][column] = color;
        checkVisited[row][column] = true;
        
        for (let i = 0; i < direction.length; i++) {
            const [rowDirection, columnDirection] = direction[i];
            const [rowDestination, columnDestination] = [row + rowDirection, column + columnDirection];
            
            if ((rowDestination >= 0 && rowDestination < rowLength) && (columnDestination >= 0 && columnDestination < columnLength)) {
                const isPrevVisited = checkVisited[rowDestination][columnDestination];
                const destinationColor = copiedImage[rowDestination][columnDestination];
                const isSameColor = destinationColor === standardColor;
                
                if (!isPrevVisited && isSameColor) {
                    queue.push([rowDestination, columnDestination]);
                }
            }
        }
    }
    
    return copiedImage;
};
