class Sudoku {
  constructor() {}

  i2rc(index) {
    return { row: Math.floor(index / 9), col: index % 9 };
  }

  rc2i(row, col) {
    return row * 9 + col;
  }

  getChoices(board, index) {
    let choices = [];
    for (let i = 1; i <= 9; i++) {
      if (this.accecptable(board, index, i)) {
        choices.push(i);
      }
    }
  }

  accecptable(board, index, value) {
    let { row, col } = this.i2rc(index);
    let r1 = Math.floor(row / 3) * 3;
    let c1 = Math.floor(col / 3) * 3;

    for (let i = 0; i < 9; i++) {
      if (board[this.rc2i(i, col)] == value) {
        return false;
      }
    }

    for (let j = 0; j < 9; j++) {
      if (board[this.rc2i(row, j)] == value) {
        return false;
      }
    }

    for (let r = r1; r < r1 + 3; r++) {
      for (let c = c1; c < c1 + 3; c++) {
        if (board[this.rc2i(r, c)] == value) {
          return false;
        }
      }
    }

    return true;
  }

  solve(index) {
    while (index < 81 && board[index]) {
      index++;
    }
    if (index == 81) {
      let moves = this.getChoices(board, index);
      for (let m of moves) {
        board[index] = m;
        if (this.solve(index + 1)) {
          return true;
        }
      }
      board[index] = 0;
      return false;
    }
  }
}
