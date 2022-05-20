let rows = 20;
let columns = 20;
const cells = new Array(rows);
const newCells = new Array(rows);

function createTable(rows, columns) {
    for (let i = 0; i < cells.length; i++) {
        cells[i] = new Array(columns);
        newCells[i] = new Array(columns);
    }
}

createTable(rows, columns);
for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells.length; j++) {
        cells[i][j] = 0;
        newCells[i][j] = 0;
    }
}

let pos = 0;
for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells.length; j++) {
        //let cont = vecinos(pos1, pos2, cells);
        let count = 0;
        console.log(cells[i + 1][j] + 'Si');

        // if (i === 0 && j > 0) {
        //     if (cells[i][j + 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i + 1][j + 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i + 1][j] === 1) {
        //         count++;
        //     }
        //     if (cells[i][j - 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i + 1][j - 1] === 1) {
        //         count++;
        //     }
        // }
        // if (j === 0 && i > 0) {
        //     if (cells[i][j + 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i + 1][j + 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i + 1][j] === 1) {
        //         count++;
        //     }
        //     if (cells[i - 1][j] === 1) {
        //         count++;
        //     }
        //     if (cells[i - 1][j + 1] === 1) {
        //         count++;
        //     }
        // }
        // if (i === 0 && j === 0) {
        //     if (cells[i][j + 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i + 1][j + 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i + 1][j] === 1) {
        //         count++;
        //     }
        // }
        // if (j > 0 && i > 0) {
        //     if (cells[i][j + 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i + 1][j + 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i + 1][j] === 1) {
        //         count++;
        //     }
        //     if (cells[i - 1][j] === 1) {
        //         count++;
        //     }
        //     if (cells[i - 1][j + 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i][j - 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i + 1][j - 1] === 1) {
        //         count++;
        //     }
        //     if (cells[i - 1][j - 1] === 1) {
        //         count++;
        //     }
        // }

        // if (count < 2) {
        //     newCells[i][j] = 0;
        // }
        // if (count === 3 || count === 2) {
        //     newCells[i][j] = 1;
        // }
        // if (count > 3) {
        //     newCells[i][j] = 0;
        // }

        //rules(cont, arr2);
    }
}
cells[1][1] = 1;
cells[1][0] = 1;
cells[0][0] = 1;
cells[0][2] = 1;
cells[1][2] = 1;
cells[7][7] = 1;
cells[7][8] = 1;
cells[7][9] = 1;
console.log(cells[i + 1][j]);

console.log(cells[1].length);
console.log(newCells.length);
console.table(cells);
console.table(newCells);
