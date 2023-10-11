function isValid(board, row, col, num) {
    // Check if the number is not in the current row, column, and 3x3 grid
    for (let i = 0; i < 9; i++) {
        if (
            board[row][i] === num || 
            board[i][col] === num || 
            board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num
            ) 
        {
            return false;
        }
    }
    return true;
}

function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// Example Sudoku puzzle
let complexSudoku = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 7, 0],
            [0, 7, 0, 0, 0, 0, 0, 0, 0],

            [1, 0, 0, 4, 0, 6, 0, 0, 7],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 2, 5, 4, 6],

            [3, 0, 2, 7, 6, 0, 9, 8, 0],
            [0, 6, 4, 9, 0, 3, 0, 0, 1],
            [9, 8, 0, 5, 2, 1, 0, 6, 0]
];

if (solveSudoku(complexSudoku)) {
    console.log("Solved Sudoku:");
    console.log(complexSudoku.map(row => row.join(' ')).join('\n'));
} else {
    console.log("No solution exists.");
}

