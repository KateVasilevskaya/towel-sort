// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    } else if (matrix.length == 0) {
        return [];
    } else {
        matrix.forEach((element, index) => {
            if (index % 2 === 0) {
                return matrix[index];
            } else {
                matrix[index].reverse();
            }
        });
    }
    const newMatrix = matrix.reduce((element, index) => {
        return element.concat(index);
    });
    return newMatrix;
};
