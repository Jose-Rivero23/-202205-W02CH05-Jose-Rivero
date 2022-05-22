let rows = 15;
let cols = 15;
const cells = new Array(rows);
const newCells = new Array(rows);

export function createTable(cols) {
    for (let i = 0; i < cells.length; i++) {
        cells[i] = new Array(cols);
        newCells[i] = new Array(cols);
    }
}

export function iniciar(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            cells[i][j] = Math.random().toFixed(0);
            newCells[i][j] = cells[i][j];
        }
    }
    return cells;
}
export function covid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            cells[i][j] = 0;
            newCells[i][j] = 0;
        }
    }
}
export function copyAndResetCells() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            cells[i][j] = newCells[i][j];
            newCells[i][j] = 0;
        }
    }
}
export function runCells() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            rules(i, j);
        }
    }

    copyAndResetCells();
}

export function rules(row, col) {
    let numNeighbors = countNeighbors(row, col);
    if (cells[row][col] == 1) {
        if (numNeighbors < 2) {
            newCells[row][col] = 0;
        } else if (numNeighbors == 2 || numNeighbors == 3) {
            newCells[row][col] = 1;
        } else if (numNeighbors > 3) {
            newCells[row][col] = 0;
        }
    } else if (cells[row][col] == 0) {
        if (numNeighbors == 3) {
            newCells[row][col] = 1;
        }
    }
}

export function countNeighbors(row, col) {
    var count = 0;
    if (row - 1 >= 0) {
        if (cells[row - 1][col] == 1) count++;
    }
    if (row - 1 >= 0 && col - 1 >= 0) {
        if (cells[row - 1][col - 1] == 1) count++;
    }
    if (row - 1 >= 0 && col + 1 < cols) {
        if (cells[row - 1][col + 1] == 1) count++;
    }
    if (col - 1 >= 0) {
        if (cells[row][col - 1] == 1) count++;
    }
    if (col + 1 < cols) {
        if (cells[row][col + 1] == 1) count++;
    }
    if (row + 1 < rows) {
        if (cells[row + 1][col] == 1) count++;
    }
    if (row + 1 < rows && col - 1 >= 0) {
        if (cells[row + 1][col - 1] == 1) count++;
    }
    if (row + 1 < rows && col + 1 < cols) {
        if (cells[row + 1][col + 1] == 1) count++;
    }
    return count;
}

createTable(rows, cols);
iniciar(cells);

console.table(cells);

for (let i = 0; i < 6; i++) {
    runCells();
    console.table(cells);
}
covid();

console.table(cells);
