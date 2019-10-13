class TicTacToe {
   constructor() {
       this.field = [
           [null, null, null],
           [null, null, null],
           [null, null, null]
       ];
      this.curr_p = 'x';
       this.histo = 0;
       this.winner = null;
       this.draw = false;
   }

   getCurrentPlayerSymbol() { // returns current player (`x` or `o`)
       return this.curr_p;
   }

   nextTurn(rowIndex, columnIndex) { // updates class state (change current player, update marks storage etc.)
       if (this.field[rowIndex][columnIndex] == null) {
           this.field[rowIndex][columnIndex] = this.curr_p;
           this.curr_p == 'x' ? this.curr_p = 'o' : this.curr_p = 'x';
           this.histo++;
           this.winner = this.getWinner();
           if (this.histo == 9 & this.winner == null) this.draw = true;
       }
   }

   isFinished() { // returns true if game is finished (e.g. there is a winner or it is a draw)
       return (this.winner != null || this.draw);
   }

   getWinner() { // returns winner symbol (`x` or `o`) or null if there is no winner yet
       if ((this.field[0][0] == 'x' & this.field[0][1] == 'x' & this.field[0][2] == 'x') ||
           (this.field[1][0] == 'x' & this.field[1][1] == 'x' & this.field[1][2] == 'x') ||
           (this.field[2][0] == 'x' & this.field[2][1] == 'x' & this.field[2][2] == 'x') ||
           (this.field[0][0] == 'x' & this.field[1][0] == 'x' & this.field[2][0] == 'x') ||
           (this.field[0][1] == 'x' & this.field[1][1] == 'x' & this.field[2][1] == 'x') ||
           (this.field[0][2] == 'x' & this.field[1][2] == 'x' & this.field[2][2] == 'x') ||
           (this.field[0][0] == 'x' & this.field[1][1] == 'x' & this.field[2][2] == 'x') ||
           (this.field[2][0] == 'x' & this.field[1][1] == 'x' & this.field[0][2] == 'x')) {
           return 'x';
       } else if ((this.field[0][0] == 'o' & this.field[0][1] == 'o' & this.field[0][2] == 'o') ||
           (this.field[1][0] == 'o' & this.field[1][1] == 'o' & this.field[1][2] == 'o') ||
           (this.field[2][0] == 'o' & this.field[2][1] == 'o' & this.field[2][2] == 'o') ||
           (this.field[0][0] == 'o' & this.field[1][0] == 'o' & this.field[2][0] == 'o') ||
           (this.field[0][1] == 'o' & this.field[1][1] == 'o' & this.field[2][1] == 'o') ||
           (this.field[0][2] == 'o' & this.field[1][2] == 'o' & this.field[2][2] == 'o') ||
           (this.field[0][0] == 'o' & this.field[1][1] == 'o' & this.field[2][2] == 'o') ||
           (this.field[2][0] == 'o' & this.field[1][1] == 'o' & this.field[0][2] == 'o')) {
           return 'o';
       } else {
           return null;
       }
   }

   noMoreTurns() { // returns true if there is no more fields to place a `x` or `o`
       return this.histo == 9;
   }

   isDraw() { // returns true if there is no more turns and no winner
       return this.draw;
   }

   getFieldValue(rowIndex, colIndex) { // returns cell's value (if any) or `null`
       return this.field[rowIndex][colIndex];
   }
   }

   module.exports = TicTacToe;