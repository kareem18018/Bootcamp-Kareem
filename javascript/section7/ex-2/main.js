const fs = require('fs');
const yaml = require('js-yaml');

class Chessboard {
  constructor() {
    this.board = Array.from({ length: 8 }, () => Array(8).fill('-'));
  }

  printBoard() {
    for (let row = 0; row < 8; row++) {
      console.log(this.board[row].join(' '));
    }
  }

  movePiece(fromRow, fromCol, toRow, toCol) {
    const piece = this.board[fromRow][fromCol];
    this.board[toRow][toCol] = piece;
    this.board[fromRow][fromCol] = '-';
  }

  killPiece(row, col) {
    this.board[row][col] = '-';
  }

  saveToFile(filename) {
    const yamlData = yaml.dump({ board: this.board });
    fs.writeFileSync(filename, yamlData, 'utf-8');
    console.log(`Chessboard saved to ${filename}`);
  }

  loadFromFile(filename) {
    const yamlData = fs.readFileSync(filename, 'utf-8');
    const data = yaml.load(yamlData);
    this.board = data.board;
    console.log(`Chessboard loaded from ${filename}`);
  }
}

const chessboard = new Chessboard();

console.log("Initial Chessboard:");
chessboard.printBoard();

chessboard.movePiece(1, 0, 3, 0);

chessboard.killPiece(7, 7);

console.log("\nChessboard after moving and killing:");
chessboard.printBoard();

chessboard.saveToFile('chessboard.yaml');

const loadedChessboard = new Chessboard();
loadedChessboard.loadFromFile('chessboard.yaml');

console.log("\nChessboard loaded from file:");
loadedChessboard.printBoard();
