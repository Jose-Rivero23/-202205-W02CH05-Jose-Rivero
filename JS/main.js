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

function iniciar(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            cells[i][j] = 0;
            newCells[i][j] = 0;
        }
    }
}

function recorrer(arr1, arr2) {
    let pos = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            //let cont = vecinos(pos1, pos2, cells);
            let count = 0;

            if (i === 0 && j > 0) {
                if (cells[i][j + 1] === 1) {
                    count++;
                }
                if (cells[i + 1][j + 1] === 1) {
                    count++;
                }
                if (cells[i + 1][j] === 1) {
                    count++;
                }
                if (cells[i][j - 1] === 1) {
                    count++;
                }
                if (cells[i + 1][j - 1] === 1) {
                    count++;
                }
            }
            if (j === 0 && i > 0) {
                if (cells[i][j + 1] === 1) {
                    count++;
                }
                if (cells[i + 1][j + 1] === 1) {
                    count++;
                }
                if (cells[i + 1][j] === 1) {
                    count++;
                }
                if (cells[i - 1][j] === 1) {
                    count++;
                }
                if (cells[i - 1][j + 1] === 1) {
                    count++;
                }
            }
            if (i === 0 && j === 0) {
                if (cells[i][j + 1] === 1) {
                    count++;
                }
                if (cells[i + 1][j + 1] === 1) {
                    count++;
                }
                if (cells[i + 1][j] === 1) {
                    count++;
                }
            }
            if (j > 0 && i > 0) {
                if (cells[i][j + 1] === 1) {
                    count++;
                }
                if (cells[i + 1][j + 1] === 1) {
                    count++;
                }
                if (cells[i + 1][j] === 1) {
                    count++;
                }
                if (cells[i - 1][j] === 1) {
                    count++;
                }
                if (cells[i - 1][j + 1] === 1) {
                    count++;
                }
                if (cells[i][j - 1] === 1) {
                    count++;
                }
                if (cells[i + 1][j - 1] === 1) {
                    count++;
                }
                if (cells[i - 1][j - 1] === 1) {
                    count++;
                }
            }

            //rules(cont, arr2);
        }
    }
}

iniciar(cells, newCells);

function vecinos(i, j, cells) {
    let count = 0;

    if (i === 0 && j > 0) {
        if (cells[i][j + 1] === 1) {
            count++;
        }
        if (cells[i + 1][j + 1] === 1) {
            count++;
        }
        if (cells[i + 1][j] === 1) {
            count++;
        }
        if (cells[i][j - 1] === 1) {
            count++;
        }
        if (cells[i + 1][j - 1] === 1) {
            count++;
        }
    }
    if (j === 0 && i > 0) {
        if (cells[i][j + 1] === 1) {
            count++;
        }
        if (cells[i + 1][j + 1] === 1) {
            count++;
        }
        if (cells[i + 1][j] === 1) {
            count++;
        }
        if (cells[i - 1][j] === 1) {
            count++;
        }
        if (cells[i - 1][j + 1] === 1) {
            count++;
        }
    }
    if (i === 0 && j === 0) {
        if (cells[i][j + 1] === 1) {
            count++;
        }
        if (cells[i + 1][j + 1] === 1) {
            count++;
        }
        if (cells[i + 1][j] === 1) {
            count++;
        }
    }
    if (j > 0 && i > 0) {
        if (cells[i][j + 1] === 1) {
            count++;
        }
        if (cells[i + 1][j + 1] === 1) {
            count++;
        }
        if (cells[i + 1][j] === 1) {
            count++;
        }
        if (cells[i - 1][j] === 1) {
            count++;
        }
        if (cells[i - 1][j + 1] === 1) {
            count++;
        }
        if (cells[i][j - 1] === 1) {
            count++;
        }
        if (cells[i + 1][j - 1] === 1) {
            count++;
        }
        if (cells[i - 1][j - 1] === 1) {
            count++;
        }
    }

    return count;
}

function rules(count, newCells) {
    if (count < 2) {
        newCells[i][j] = 0;
    }
    if (count === 3 || count === 2) {
        newCells[i][j] = 1;
    }
    if (count > 3) {
        newCells[i][j] = 0;
    }
}
recorrer(cells, newCells);

cells[1][1] = 1;
cells[1][0] = 1;
cells[0][0] = 1;
cells[0][2] = 1;
cells[1][2] = 1;
cells[7][7] = 1;
cells[7][8] = 1;
cells[7][9] = 1;

console.log(cells[1].length);
console.log(newCells.length);
console.table(cells);
console.table(newCells);

/*
for (let i = -1; index < 1; index++) {
    for (let j = 0; index < array.length; index++) {
        const element = array[index];
        
    }
    
}*/
